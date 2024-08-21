import { Extension } from '@gltf-transform/core';

export class MSFT_texture_dds extends Extension {
	public readonly extensionName = "MSFT_texture_dds";
	public static readonly EXTENSION_NAME = "MSFT_texture_dds";
	write(context) { return this; }
	read(context) { return this; }	
}
