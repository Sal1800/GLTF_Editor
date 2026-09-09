import * as THREE from "three";

/* USAGE:
// gltf  = the JS object you got after JSON.parse( text )
// bin   = the Uint8Array you downloaded for .bin
const geometry = buildBufferGeometry(gltf, bin);

const material = new THREE.MeshStandardMaterial({ color: 0x88ccff });
const mesh     = new THREE.Mesh(geometry, material);
scene.add(mesh);
*/
  // accessor  = gltf.accessors[ index ]
  // bufferViews = gltf.bufferViews
  // bin         = the Uint8Array you already downloaded
  const readAccessor= (gltf, accessor, bin) => {
    const view    = gltf.bufferViews[ accessor.bufferView ];
    const byteOffset = (accessor.byteOffset || 0) + (view.byteOffset || 0);
    const count   = accessor.count;
    const stride  = view.byteStride || 0;          // 0 ⇒ tightly packed
    const compType= accessor.componentType;        // 5126 = FLOAT, etc.
    const type    = accessor.type;                 // "VEC3", "VEC2", "SCALAR" …

    // Map GLTF componentType to TypedArray constructor
    const ArrayCtor = {
      5120: Int8Array,      // BYTE
      5121: Uint8Array,     // UNSIGNED_BYTE
      5122: Int16Array,     // SHORT
      5123: Uint16Array,    // UNSIGNED_SHORT
      5125: Uint32Array,    // UNSIGNED_INT
      5126: Float32Array    // FLOAT
    }[ compType ];

    const itemSize = { SCALAR:1, VEC2:2, VEC3:3, VEC4:4, MAT4:16 }[ type ];

    // Build the attribute
    if (stride === 0 || stride === itemSize * ArrayCtor.BYTES_PER_ELEMENT) {
      // Tightly packed – we can give three.js the whole sub-array
      return new THREE.BufferAttribute(
        new ArrayCtor( bin.buffer, bin.byteOffset + byteOffset, count * itemSize ),
        itemSize,
        accessor.normalized === true
      );
    } else {
      // Interleaved – we have to copy
      const result = new ArrayCtor( count * itemSize );
      const src    = new Uint8Array( bin.buffer, bin.byteOffset + byteOffset );
      for (let i = 0; i < count; ++i) {
        const offset = i * stride;
        const dstOffset = i * itemSize;
        const slice = src.slice(offset, offset + itemSize * ArrayCtor.BYTES_PER_ELEMENT);
        result.set( new ArrayCtor( slice.buffer, slice.byteOffset, itemSize ), dstOffset );
      }
      return new THREE.BufferAttribute( result, itemSize, accessor.normalized === true );
    }
  };


export default {

  buildBufferGeometry: (gltf, bin, meshIndex = 0, primIndex = 0) => {
    const mesh     = gltf.meshes[ meshIndex ];
    const prim     = mesh.primitives[ primIndex ];   // { attributes:{POSITION:0,NORMAL:1,…}, indices:2, material:3 }

    const geometry = new THREE.BufferGeometry();


    // 1. Index buffer (optional)
    if (prim.indices !== undefined) {
      const indexAccessor = gltf.accessors[ prim.indices ];
      geometry.setIndex( readAccessor(gltf, indexAccessor, bin) );
    }

    // 2. Vertex attributes
    for (const [gltfName, accIndex] of Object.entries(prim.attributes)) {
      const attr = readAccessor(gltf, gltf.accessors[ accIndex ], bin );
      const threeName = {
        POSITION: 'position',
        NORMAL: 'normal',
        TANGENT: 'tangent',
        TEXCOORD_0: 'uv',
        TEXCOORD_1: 'uv2',
        COLOR_0: 'color',
        JOINTS_0: 'skinIndex',
        WEIGHTS_0: 'skinWeight'
      }[gltfName] || gltfName;
      geometry.setAttribute( threeName, attr );
    }

    // 3. Compute bounding box/sphere for frustum culling
    geometry.computeBoundingBox();
    geometry.computeBoundingSphere();

    return geometry;
  }
};