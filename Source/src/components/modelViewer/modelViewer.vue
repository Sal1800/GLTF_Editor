<template>
  <div class="model-viewer">
    <section class="controls">

    </section>    
    <canvas ref="canvas"></canvas>

  </div>
</template>

<script>
import * as THREE from "three";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
// import { FlyControls } from 'three/addons/controls/FlyControls.js';
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import threeGLTF from "../../utils/gltf_three.js";
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import gltf from '../../utils/gltf_base.js';

let sceneCtx;
let cameraCtx;
let canvasCtx;

export default {
  name: 'modelViewer',
  props: {
    model: Object,
    buffer: Object,
    selectedNode: Object,
    index: Number,
  },
  data() {
    return {
      files: [],
      renderer: {},
      controls: {},
      objects: [],
      meshData: [],
      materials: {},
      options: {},
      canvasSize: {
        width: 600,
        height: 600,
      },
    }
  },
  watch: { 
    model: {
      handler(cur) {
        this.buildGeometry();
      },
      immediate: true,
    },
    buffer: {
      handler(cur) {
        this.buildGeometry();
      },
      immediate: true,
    }, 
    index: {
      handler(index) {
        // this.selectObject(`mesh_${index}`);
        // this.highlightObject(`mesh_${index}`);
      },
      immediate: true,      
    },
    selectedNode: {
      handler(obj) {
        if (obj && obj.name) {
          // this.selectObject(obj.name);
          this.highlightObject(obj.name);
        }
      },
      immediate: true,      
    },      
  },
  mounted() {
    canvasCtx = document.querySelector(".model-viewer canvas");
    sceneCtx = new THREE.Scene();


    cameraCtx = new THREE.PerspectiveCamera(
      50,
      this.canvasSize.width / this.canvasSize.height,
      0.05,
      200
    );

    // cameraCtx.position.set(-1.8, 0.6, 2.7);
    cameraCtx.position.set( 0, 10, 20 );

    this.setMaterials();

    // this.loadModel(this.render);
    this.initRenderer();
    if (! this.renderer.domElement) {
      console.error(this.renderer)
      return;
    }
    this.initControls();

    window.addEventListener("resize", this.onWindowResize);

  },
  computed: {
    scene() {
      return sceneCtx;
    }
  },
  methods: {

    setMaterials() {
      const matCap = new THREE.MeshMatcapMaterial({
        color: 0xc5ced1,
        side: THREE.DoubleSide,
      });
      const transparent = new THREE.MeshStandardMaterial({ 
        name: 'transparent',
        color: 0xeaeaea, 
        emissive: 0xeaeaea,
        transparent: true,
        opacity: 0.3,
        roughness: 0.9,
        depthWrite: false, 
      });
      const highlight = new THREE.MeshStandardMaterial({ 
        name: 'highlight',
        color: 0xfca103,
        emissive: 0xfca103,
        transparent: true,
        opacity: 0.7,
        roughness: 0.7,
        depthWrite: false, 
      });      
      const edgeSelect = new THREE.LineBasicMaterial({ color: 0x9c6802 });
      this.materials = {
        matCap,
        transparent,
        highlight,
        edgeSelect,
      }
    },


    buildMesh(meshIndex, primIndex) {
      const geometry = threeGLTF.buildBufferGeometry(this.model, this.buffer, meshIndex, primIndex);
      const geoMesh = new THREE.Mesh(geometry, this.materials.transparent);
      return geoMesh;
    },

    buildCombinedMesh(meshObj, meshIndex, material) {
      const geometries = [];
      meshObj.primitives.keys().forEach( primIndex => {
        const geometry = threeGLTF.buildBufferGeometry(this.model, this.buffer, meshIndex, primIndex);
        geometries.push(geometry);
      });
      const mergedGeometry = mergeGeometries(geometries);
      const mesh = new THREE.Mesh(mergedGeometry, material);
      return mesh
    },

    processNode(node, parent) {
      let object = new THREE.Object3D();

      if (node.mesh !== undefined) {
        const meshObj = gltf.getMesh(node.mesh, this.model);
        const mat = this.materials.transparent;
        object = this.buildCombinedMesh(meshObj, node.mesh, mat);
      }

      object.name = node.name;

      if (node.matrix) {
        object.matrix.fromArray(node.matrix);
        object.matrix.decompose(object.position, object.quaternion, object.scale);
      } else {
        const tr = node.translation || [0, 0, 0];
        const rot = node.rotation || [0, 0, 0, 1];
        const sc = node.scale || [1, 1, 1];

        object.position.set(tr[0], tr[1], tr[2]);
        object.quaternion.set(rot[0], rot[1], rot[2], rot[3]);
        object.scale.set(sc[0], sc[1], sc[2]);
      }

      if (parent) {
        parent.add(object);
      } else {
        sceneCtx.add(object);
      }

      if (node.children) {
        const children = gltf.getChildNodes(node.children, this.model);
        children.forEach(childNode => this.processNode(childNode, object));
      }
    },

    processNode2(node, parentGroup) {
      const nodeGroup = new THREE.Group();
      nodeGroup.name = node.name + '_g';
      if (node.children) {
        const children = gltf.getChildNodes(node.children, this.model);
        children.forEach(childNode => this.processNode(childNode, nodeGroup))
      }
      
      if (node.mesh !== undefined) {
        // mesh
        const meshObj = gltf.getMesh(node.mesh, this.model);
        const mat = this.materials.transparent;
        meshObj.primitives.keys().forEach( primIndex => {
          const mesh = this.buildMesh(node.mesh, primIndex);
          mesh.name = node.name;
          const tr1 = node.translation || [0,0,0];
          const rot1 = node.rotation || [0,0,0,0];
          // mesh.position.set(tr1[0], tr1[1], tr1[2]);
          // mesh.quaternion.set(rot1[0], rot1[1], rot1[2], rot1[3]);
          nodeGroup.add(mesh);
        });
      } else {
        // empty
        const emptyObj = new THREE.Object3D();
        emptyObj.name = node.name;
        nodeGroup.add(emptyObj);
      }

        const tr = node.translation || [0,0,0];
        const rot = node.rotation || [0,0,0,0];
        nodeGroup.position.set(tr[0], tr[1], tr[2]);
        nodeGroup.quaternion.set(rot[0], rot[1], rot[2], rot[3]);    

      if (parentGroup) {
        parentGroup.add(nodeGroup);
      } else {
        sceneCtx.add(nodeGroup);
      }
    },

    clearScene() {
        sceneCtx.traverse((object) => {
            if (!object.isMesh) return;
            if (object.geometry) {
                object.geometry.dispose();
            }
        });
        sceneCtx.clear();
    },

    buildGeometry(index) {
      if (!(this.model && this.buffer)) {
        return;
      }
      if (!this.model.meshes) {
        return;
      }
      if (!(this.model.scenes && this.model.scenes[0].nodes)) {
        return;
      }


      this.clearScene();
      this.objects = [];
      this.meshData = [];

      const nodes = gltf.getChildNodes(this.model.scenes[0].nodes, this.model);
      nodes.forEach( node => {
        this.processNode(node);
      });


      const axesHelper = new THREE.AxesHelper( 5 );
      axesHelper.setColors(0x222222, 0x222222, 0x222222);
      sceneCtx.add( axesHelper );

      const gridProperties = {
        size: 10,
        divisions: 10,
        colorGrid: 0x505050,
      }

      const gridHelper = new THREE.GridHelper( 10,10,0x505050,0x505050 );
      sceneCtx.add( gridHelper );

      this.render();
    },

    selectObject(name) {
      if (! sceneCtx) return;

        const hl = sceneCtx.getObjectByName('highlight');
        if (hl) {
          sceneCtx.remove(hl);
          hl.geometry.dispose();
          hl.material.dispose();
        }
        
        const obj = sceneCtx.getObjectByName(name);
        if (obj) {
          const edges = new THREE.EdgesGeometry( obj.geometry ); 
          const line = new THREE.LineSegments(edges, this.materials.edgeSelect );line.material.opacity = 0.5;
            line.material.transparent = true;
            line.name = 'highlight';

          sceneCtx.add( line );   
        }    
        this.render();
    },

    highlightObject(name) {
      if (! sceneCtx) return;

        // const org = sceneCtx.getObjectByName('origin');
        const org = sceneCtx.getObjectsByProperty('name', 'origin');

        org.forEach( org => {
          if (org.geometry) {
            org.removeFromParent();
            sceneCtx.remove(org);
            org.geometry.dispose();
          }

        });
      this.render();
      const origin = new THREE.AxesHelper(1);
      origin.name = 'origin';

      const previous = sceneCtx.getObjectByProperty('material',  this.materials.highlight);
      if (previous && previous.isMesh) {
        previous.material = this.materials.transparent;
      }
      const obj = sceneCtx.getObjectByName(name);
      if (obj && obj.isMesh) {
        obj.material = this.materials.highlight;
        // console.log(obj)
        // console.log(sceneCtx)
      }
      if (obj && origin) {
        obj.add(origin);
      }
      // this.materials.highlight.needsUpdate = true;
      this.render();
    },

    onChangeModelDisplay(mode) {
      if (mode === 0) {

      }
    },

    setModelMaterial(opacity) {
      
    },

    //setup the renderer
    initRenderer() {
      this.renderer = new THREE.WebGLRenderer({ antialias: true, canvas: canvasCtx });
      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.renderer.setSize(this.canvasSize.width, this.canvasSize.height);
      this.renderer.toneMapping =THREE.NeutralToneMapping; //THREE.ACESFilmicToneMapping; 
      this.renderer.toneMappingExposure = 1;
      this.renderer.setClearColor(0x323232, 1.0);
      this.renderer.outputEncoding = THREE.sRGBEncoding; 
    },
    // setup controls
    initControls() {
      const controls = new OrbitControls(cameraCtx, canvasCtx);
      // const controls = new FlyControls(cameraCtx, canvasCtx);
      controls.addEventListener("change", this.render); // use if there is no animation loop to render after any changes
      controls.minDistance = 0.1;
      controls.maxDistance = 50;
      controls.target.set(0, 0, -0.2);
      controls.update();
    },
    render() {
        const s = sceneCtx;
        const cam = cameraCtx;
        this.renderer.render(s, cam);
    },
    onWindowResize() {
      cameraCtx.aspect = this.canvasSize.width / this.canvasSize.height;
      cameraCtx.updateProjectionMatrix();

      this.renderer.setSize(this.canvasSize.width, this.canvasSize.height);

      this.render();
    },

  }
}
</script>

<style scoped>
  .model-viewer {
    flex: 1 1 30%;
    max-width: 600px;
    max-height: 600px;    
  }

  .model-viewer canvas {
    width: 100%;
    height: 100%;
    max-width: 600px;
    max-height: 100%;
  }

</style>

