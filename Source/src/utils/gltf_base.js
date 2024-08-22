import { Document, WebIO } from '@gltf-transform/core';
import { MSFT_texture_dds } from './MSFS_extensions.ts';

const options = {
	extensions: [MSFT_texture_dds],
	dependencies: {},
};

export default {

	document: {},
	model : {},
	nodeParents: [],

	async readFile(path) {
		const io = new WebIO({credentials: 'include'});
		this.document = await io.read(path);
		return this.document;
	},

	async readJSON(json) {
		const io = new WebIO();
		io.registerExtensions(options.extensions);
		this.document = await io.readJSON(json, options);
		return this.document;
	},


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
				// const node = this.getNode(index, model);
				// if (node.children) {
				// 	node.children.forEach( child => {
				// 		parents[child] = item;
				// 	});
				// }
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

};