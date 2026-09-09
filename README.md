# GLTF Viewer
This is a tool I needed to review GLTF files that I was exporting from Blender. The most popular library, GLTFLoader wasn't able to work with the specific type of file created for use in Microsoft Flight Simulator. I needed these specific features:
* Ability to use a .gltf and .bin file for each model
* Ignore missing or unknown extensions
* Ability to extract the animation data and display it in a readable format

While the name implies that this is an editor, the edit and export functions are still work in progress.

# Reading GLTF files
This project is intended for split GLTF files where there is a JSON part in {filename}.gltf and a binary part in {filename}.bin. Load both files together by dragging.

# Runs on the web
https://sal1800.github.io/GLTF_Editor/index.html

No data is sent to a server, this is purely running the code only in your browser.
