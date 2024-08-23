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
		return model.nodes.findIndex( item => node.name === item.name);
	},

	getNodeByIndex(nodeIndex, model) {
		return model.nodes && this.model.nodes[nodeIndex] || {};
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
	},

	getAccessorData(accessorIndex, model) {
	  const accessor = model.accessors[accessorIndex];
	  const bufferView = model.bufferViews[accessor.bufferView];

	  const buffer = this.g_buffer;
	  
	  const componentType = accessor.componentType;
	  const type = accessor.type;
	  const count = accessor.count;
	  
	  const arrayConstructor = this.bufferTypes.getArrayConstructor(componentType);
	  const itemSize = this.bufferTypes.getItemSize(type);
	  
	  const byteOffset = (bufferView.byteOffset || 0) + (accessor.byteOffset || 0);
	  const dataView = new DataView(buffer.buffer, byteOffset, bufferView.byteLength);
	  
	  const result = new arrayConstructor(count * itemSize);
	  
	  for (let i = 0; i < count * itemSize; i++) {
	    result[i] = this.bufferTypes.readComponent(dataView, i * this.bufferTypes.componentSize(componentType), componentType);
	  }
	  
	  return result;
	},



};