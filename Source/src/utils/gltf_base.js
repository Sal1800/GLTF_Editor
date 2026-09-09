// import { Document, WebIO } from '@gltf-transform/core';
// import { MSFT_texture_dds } from './MSFS_extensions.ts';

// const options = {
// 	extensions: [MSFT_texture_dds],
// 	dependencies: {},
// };

export default {

	document: {},
	model : {},
	nodeParents: [],
	g_buffer: null,

	// TODO: remove this global and use method args instead
	setBuffer(bufferData) {
		this.g_buffer = bufferData;
	},

	// async readFile(path) {
	// 	const io = new WebIO({credentials: 'include'});
	// 	this.document = await io.read(path);
	// 	return this.document;
	// },

	// async readJSON(json) {
	// 	const io = new WebIO();
	// 	io.registerExtensions(options.extensions);
	// 	this.document = await io.readJSON(json, options);
	// 	return this.document;
	// },


	// JSON methods

	parseModel(json) {
		// try {
			this.model = JSON.parse(json);
			this.parseNodes(this.model);
			return this.model;
		// } catch(e) {
		// 	console.error('Failed to parse JSON: ' + e);
		// }
	},

	parseNodes(model) {
		const parents = [];		
		const enumerateChildren = (node, parentIndex) => {
			if (node.children) {
				node.children.forEach( child => {
					parents[child] = parentIndex;
					enumerateChildren(this.getNode(child), child);
				});
			}
		};
		// try {
			model.scenes[0].nodes.forEach( (item, index) => {
				parents[item] = 0; // root nodes have no parent node
				enumerateChildren(this.getNode(item), item);
			});
			this.nodeParents = parents;
		// } catch(e) {
		// 	console.error('Failed to parse node parents: ' + e);
		// }
	},

	getScenes(model) {
		return model && model.scenes || [];
	},

	getScene(index = 0, model) {
		return this.getScenes(model)[index];
	},

	getNodes(model) {
		return model && model.nodes || [];
	},

	getNode(index = 0, model) {
		return this.getNodes(model)[index] || {};
	},

	getNodeIndex(node, model) {
		if (!model) return
		return model.nodes.findIndex( item => node.name === item.name);
	},

	getNodeByIndex(nodeIndex, model) {
		if (!model) return
		return model.nodes && model.nodes[nodeIndex] || {};
	},	

	getChildNodes(list, model) {
		if (!list || !list.length) return [];
		return list.map( item => {
			return this.getNodeByIndex(item, model);
		});
	},

	getParentNode(nodeIndex) {
		return this.nodeParents[nodeIndex] || {}
	},

	getMeshes(model) {
		return model.meshes || [];
	},

	getMesh(index, model) {
		return this.getMeshes(model)[index] || {};
	},

	getPrimitives(meshIndex, model) {
		return model.meshes[meshIndex].primitives || [];
	},	

	getMaterials(model) {
		return model.materials || [];
	},

	getMaterial(materialIndex, model) {
		return model.materials[materialIndex] || {};
	},	

	getMaterialIndex(material, model) {
		return model.materials.findIndex( item => material.name === item.name);
	},

	getTextures(model) {
		return model.textures || [];
	},

	getImages(model) {
		return model.images || [];
	},

	getImage(imageIndex, model) {
		if (!model.images) return 
		return model.images[imageIndex];
	},

	getAnimations(model) {
		return model.animations || [];
	},

	getName(node) {
		return node && node.name || '';
	},

	getBaseColorFactor(mat) {
		return (mat && mat.pbrMetallicRoughness && mat.pbrMetallicRoughness.baseColorFactor) || [0,0,0,0];
	},

	getBaseColorTexture(mat, model) {
		const textures = this.getTextures(model);
		if (!textures) return null;
		const textureIndex = (mat && mat.pbrMetallicRoughness && mat.pbrMetallicRoughness.baseColorTexture && mat.pbrMetallicRoughness.baseColorTexture.index) || null;
		return textureIndex != null ? textures[textureIndex] : null;
	},

	getAlphaMode(mat) {
		return (mat && mat.alphaMode) || null;
	},

	getEmissiveFactor(mat) {
		return (mat && mat.emissiveFactor) || [0,0,0];
	},

	getEmissiveTexture(mat, model) {
		const textures = this.getTextures(model);
		if (!textures) return null;
		const textureIndex = (mat && mat.emissiveTexture && mat.emissiveTexture.index) || null;
		return (textureIndex != null && textures[textureIndex]) || null;
	},

	getMetallicFactor(mat) {
		return (mat && mat.pbrMetallicRoughness && mat.pbrMetallicRoughness.metallicFactor);
	},

	getRoughnessFactor(mat) {
		return (mat && mat.pbrMetallicRoughness && mat.pbrMetallicRoughness.roughnessFactor);
	},

	getMetallicRoughnessTexture(mat, model) {
		const textures = this.getTextures(model);
		if (!textures) return null;
		const textureIndex = (mat && mat.pbrMetallicRoughness && mat.pbrMetallicRoughness.metallicRoughnessTexture && mat.pbrMetallicRoughness.metallicRoughnessTexture.index) || null;
		return (textureIndex != null && textures[textureIndex]) || null;
	},
	getNormalScale(mat) {
		return (mat && mat.normalTexture && mat.normalTexture.scale);
	},
	getNormalTexture(mat, model) {
		const textures = this.getTextures(model);
		if (!textures) return null;
		const textureIndex = (mat && mat.normalTexture && mat.normalTexture.index) || null;
		return (textureIndex != null && textures[textureIndex]) || null;
	},

	getOcclusionScale(mat) {
		return (mat && mat.occlusionTexture && mat.occlusionTexture.scale);
	},
	getOcclusionTexture(mat, model) {
		const textures = this.getTextures(model);
		if (!textures) return null;
		const textureIndex = (mat && mat.occlusionTexture && mat.occlusionTexture.index) || null;
		return (textureIndex != null && textures[textureIndex]) || null;
	},	

	getExtensions(mat) {
		return (mat && mat.extensions) || []; 
	},


	getAccessor(index, model) {
		return (model.accessors && model.accessors[index]) || null;
	},

	getBuffer(model) {
		return model.buffers[0] || null;
	},

	// === Buffer methods ===

	bufferTypes: {
		getArrayConstructor(componentType) {
		  switch (componentType) {
		    case 5120: return Int8Array;
		    case 5121: return Uint8Array;
		    case 5122: return Int16Array;
		    case 5123: return Uint16Array;
		    case 5125: return Uint32Array;
		    case 5126: return Float32Array;
		    default: throw new Error('Unsupported component type');
		  }
		},

		getItemSize(type) {
		  switch (type) {
		    case 'SCALAR': return 1;
		    case 'VEC2': return 2;
		    case 'VEC3': return 3;
		    case 'VEC4': return 4;
		    case 'MAT2': return 4;
		    case 'MAT3': return 9;
		    case 'MAT4': return 16;
		    default: throw new Error('Unsupported type');
		  }
		},

		componentSize(componentType) {
		  switch (componentType) {
		    case 5120: case 5121: return 1; // 8-bit
		    case 5122: case 5123: return 2; // 16-bit
		    case 5125: case 5126: return 4; // 32-bit
		    default: throw new Error('Unsupported component type');
		  }
		},

		readComponent(dataView, byteOffset, componentType) {
		  switch (componentType) {
		    case 5120: return dataView.getInt8(byteOffset);
		    case 5121: return dataView.getUint8(byteOffset);
		    case 5122: return dataView.getInt16(byteOffset, true);
		    case 5123: return dataView.getUint16(byteOffset, true);
		    case 5125: return dataView.getUint32(byteOffset, true);
		    case 5126: return dataView.getFloat32(byteOffset, true);
		    default: throw new Error('Unsupported component type');
		  }
		},
	  writeComponent(dataView, byteOffset, componentType, value) {
	    switch (componentType) {
	      case 5120: dataView.setInt8(byteOffset, value); break;
	      case 5121: dataView.setUint8(byteOffset, value); break;
	      case 5122: dataView.setInt16(byteOffset, true, value); break;
	      case 5123: dataView.setUint16(byteOffset, true, value); break;
	      case 5125: dataView.setUint32(byteOffset, true, value); break;
	      case 5126: dataView.setFloat32(byteOffset, value, true); break;
	      default: throw new Error('Unsupported component type');
	    }
	  },
	},

	getAccessorData(accessorIndex, model, bin) {
	  const accessor = model.accessors[accessorIndex];
	  const bufferView = model.bufferViews[accessor.bufferView];
		if (!accessor || !bufferView) {
		  throw new Error('Invalid accessor or bufferView index');
		}

	  const buffer = bin || this.g_buffer;
	  
	  const componentType = accessor.componentType;
	  const type = accessor.type;
	  const count = accessor.count;

	  const arrayConstructor = this.bufferTypes.getArrayConstructor(componentType);
	  const itemSize = this.bufferTypes.getItemSize(type);

	  const byteOffset = (bufferView.byteOffset || 0) + (accessor.byteOffset || 0);
	  // console.log(componentType + ' ' + byteOffset + ' ' + bufferView.byteLength);

		const bufferSize = buffer.buffer.byteLength;
		if (bufferView.byteOffset + bufferView.byteLength > bufferSize) {
		  console.log(`BufferView too large: ${byteOffset + bufferView.byteLength} > ${bufferSize}`);
		  console.log(`accessorIndex: ${accessorIndex}`);
		}

		const totalBytes = count * itemSize * this.bufferTypes.componentSize(componentType);
		if (accessor.byteOffset + totalBytes > bufferView.byteLength) {
		    throw new Error('Accessor exceeds bufferView bounds');
		}

	  const actualByteLength = Math.min(bufferView.byteLength, buffer.byteLength - byteOffset);
	  const dataView = new DataView(buffer.buffer, byteOffset, actualByteLength);

	  const result = new arrayConstructor(count * itemSize);
	  
		const bytesPerElement = this.bufferTypes.componentSize(componentType);
		for (let i = 0; i < count * itemSize; i++) {
		  const elementOffset = i * bytesPerElement;
		  if (elementOffset + bytesPerElement > actualByteLength) {
		    throw new Error('Reading beyond buffer bounds');
		  }
		  result[i] = this.bufferTypes.readComponent(dataView, elementOffset, componentType);
		}
	  
	  return result;
	},

	// Modify accessor and its bufferView
	// use only for small changes
	setAccessorData(accessorIndex, model, newData) {
	  const accessor = model.accessors[accessorIndex];
	  const bufferView = model.bufferViews[accessor.bufferView];
	  const buffer = this.g_buffer; // TODO: replace this with an arg
	  
	  const componentType = accessor.componentType;
	  const type = accessor.type;
	  const count = accessor.count;
	  
	  const itemSize = this.bufferTypes.getItemSize(type);
	  
	  // Validate input data length
	  if (newData.length !== count * itemSize) {
	    throw new Error(`Data length mismatch. Expected ${count * itemSize} values, got ${newData.length}`);
	  }
	  
	  const byteOffset = (bufferView.byteOffset || 0) + (accessor.byteOffset || 0);
	  
	  // Validate buffer bounds
	  const totalBytes = count * itemSize * this.bufferTypes.componentSize(componentType);
	  if (accessor.byteOffset + totalBytes > bufferView.byteLength) {
	    throw new Error('Write operation would exceed bufferView bounds');
	  }
	  
	  // Create DataView for writing
	  const dataView = new DataView(buffer.buffer, byteOffset, totalBytes);
	  
	  // Write the new data
	  for (let i = 0; i < newData.length; i++) {
	    this.bufferTypes.writeComponent(
	      dataView, 
	      i * this.bufferTypes.componentSize(componentType),
	      componentType,
	      newData[i]
	    );
	  }
	},

	// Insert a new bufferView and accessor
	// remember to update the accessor references to point to the new accessor
	addNewAccessorData(model, newData, componentType, type) {
    // Calculate new data size
    const itemSize = this.bufferTypes.getItemSize(type);
    const componentSize = this.bufferTypes.componentSize(componentType);
    const byteLength = newData.length * componentSize;

    // Create new bufferView
    const newBufferView = {
        buffer: 0,  // assuming using the first buffer
        byteOffset: model.buffers[0].byteLength,  // append to end
        byteLength: byteLength,
        name: "newBufferView"
    };
    
    // Create new accessor
    const newAccessor = {
        bufferView: model.bufferViews.length,  // index of new bufferView
        componentType: componentType,
        count: newData.length / itemSize,
        type: type,
        byteOffset: 0,  // starting at beginning of new bufferView
        name: "newAccessor"
    };

    // Extend the buffer
    const oldBuffer = this.g_buffer.buffer;  // TODO: replace this with an arg
    const newBuffer = new ArrayBuffer(oldBuffer.byteLength + byteLength);
    
    // Copy old data
    new Uint8Array(newBuffer).set(new Uint8Array(oldBuffer));
    
    // Write new data
    const dataView = new DataView(newBuffer, oldBuffer.byteLength, byteLength);
    for (let i = 0; i < newData.length; i++) {
        this.bufferTypes.writeComponent(
            dataView,
            i * componentSize,
            componentType,
            newData[i]
        );
    }

    // Update model
    model.bufferViews.push(newBufferView);
    model.accessors.push(newAccessor);
    model.buffers[0].byteLength += byteLength;
    
    // Update buffer reference
    this.g_buffer = new Uint8Array(newBuffer);

    return model.accessors.length - 1; // Return new accessor index
	},

	/**
		Rebuilds the buffer based on the model data
	*/
	repackBuffer(model) {
	  let currentOffset = 0;
	  const newBuffer = new ArrayBuffer(model.buffers[0].byteLength); // Initial size, we'll trim later
	  
	  // Track which bufferViews we've processed
	  const processedViews = new Set();
	  
	  // First pass: Copy accessor data in order of use
	  model.accessors.forEach((accessor, accessorIndex) => {
	    if (!processedViews.has(accessor.bufferView)) {
	      const bufferView = model.bufferViews[accessor.bufferView];
	      const oldOffset = bufferView.byteOffset;
	      
	      // Copy this bufferView's data to new position
	       // TODO: replace this.g_buffer with an arg
	      new Uint8Array(newBuffer, currentOffset).set(
	        new Uint8Array(this.g_buffer.buffer, oldOffset, bufferView.byteLength)
	      );
	      
	      // Update bufferView offset
	      bufferView.byteOffset = currentOffset;
	      currentOffset += bufferView.byteLength;
	      
	      // Align currentOffset to 4-byte boundary (optional but recommended)
	      currentOffset = Math.ceil(currentOffset / 4) * 4;
	      
	      processedViews.add(accessor.bufferView);
	    }
	  });
	  
	  // Second pass: Copy any remaining bufferViews not referenced by accessors
	  // TODO: replace this.g_buffer with an arg
	  model.bufferViews.forEach((bufferView, index) => {
	    if (!processedViews.has(index)) {
	      const oldOffset = bufferView.byteOffset;
	      
	      new Uint8Array(newBuffer, currentOffset).set(
	        new Uint8Array(this.g_buffer.buffer, oldOffset, bufferView.byteLength)
	      );
	      
	      bufferView.byteOffset = currentOffset;
	      currentOffset += bufferView.byteLength;
	      currentOffset = Math.ceil(currentOffset / 4) * 4;
	    }
	  });
	  
	  // Trim the buffer to actual size
	  const finalBuffer = new ArrayBuffer(currentOffset);
	  new Uint8Array(finalBuffer).set(new Uint8Array(newBuffer, 0, currentOffset));
	  
	  // Update buffer size in model
	  model.buffers[0].byteLength = currentOffset;
	  
	  // Update instance buffer
	  this.g_buffer = new Uint8Array(finalBuffer);
	  
	  return model;
	},


	// ============  set model values ==============
	setNodeProperty(node, property, value, model) {
		if (!model && !node) return;
		const nodeIndex = this.getNodeIndex(node, model);
		if (nodeIndex !== null) {
			try {
				model.nodes[nodeIndex][property] = value;
			} catch (e) {
				console.log(`Error setting node ${nodeIndex} ${property} : ${value} (${e})`);
			}
		}
	},


};