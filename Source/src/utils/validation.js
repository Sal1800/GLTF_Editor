

const isNonUniformScale = (vec3) => {
	if (!vec3 || vec3.length !== 3) return false;
	return (vec3[0] == vec3[1] == vec3[2]);
};


const hasMetallicRoughnessTexture = (material) => {
	return (material && material.pbrMetallicRoughness && material.pbrMetallicRoughness.metallicRoughnessTexture != null );
};

const hasFractionalMetallicTexture = (material) => {
	return (material && material.pbrMetallicRoughness && material.pbrMetallicRoughness.metallicFactor < 1  ) && hasMetallicRoughnessTexture(material);
};

const hasFractionalRoughnessTexture = (material) => {
	return (material && material.pbrMetallicRoughness && material.pbrMetallicRoughness.roughnessFactor < 1 ) && hasMetallicRoughnessTexture(material);
};

const missingOcclusion = (material) => {
	if (!material) return false;
	if ((hasMetallicRoughnessTexture(material) && !material.occlusionTexture) || (material.occlusionTexture && !hasMetallicRoughnessTexture(material))) {
		return true;
	}
	return false;
};

export default {
	isNonUniformScale,
	hasMetallicRoughnessTexture,
	hasFractionalMetallicTexture,
	hasFractionalRoughnessTexture,
	missingOcclusion
}

