

export default: {

	asoboExt: [
		{
			name: 'ASOBO_material_draw_order',
			params: [
				{key: 'drawOrderOffset', type: 'float', label: 'Draw Order'}
			],
		},
		{
			name: 'ASOBO_material_windshield',
			label: 'Windshield Material',
			params: [
				{key: 'rainDropScale', type: 'float', label: 'Rain Drop Scale'},
				{key: 'wiper1State', type: 'float', label: 'Wiper 1'},
				{key: 'wiper2State', type: 'float', label: 'Wiper 2'},
				{key: 'wiper3State', type: 'float', label: 'Wiper 3'},
				{key: 'wiper4State', type: 'float', label: 'Wiper 4'},

			],
		},
		{
			name: 'ASOBO_material_detail_map',
			label: 'Detail Map',
			params: [
				{key: 'detailNormalTexture', type: 'texture', label: 'Detail Normal Texture'},
				{key: 'UVScale', type: 'float', label: 'UV Scale'},
				{key: 'blendThreshold', type: 'float', label: 'Blend Threshold'},
			],
		},
		{
			name: 'ASOBO_material_blend_gbuffer',
			label: 'Decal Material',
			params: [
				{key: 'enabled', type: 'bool', label: 'Enabled'},
				{key: 'baseColorBlendFactor', type: 'float', label: 'Color Blend'},
				{key: 'metallicBlendFactor', type: 'float', label: 'Metallic Blend'},
				{key: 'roughnessBlendFactor', type: 'float', label: 'Roughness Blend'},
				{key: 'normalBlendFactor', type: 'float', label: 'Normal Blend'},
				{key: 'emissiveBlendFactor', type: 'float', label: 'Emissive Blend'},
				{key: 'occlusionBlendFactor', type: 'float', label: 'Occlusion Blend'},
			],
		},
		{
			name: 'ASOBO_material_shadow_options',
			params: [
				{key: 'noCastShadow', type: 'bool', label: 'No Shadow Cast'},
			],
		},						
	],

	


};
