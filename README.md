# GLTF_Editor
Basic GLTF editor prototype. Not full-featured.

This utility is intended to assist with 3D model development for Microsoft Flight Simulator. I will be expanding the support for the custom extensions. 

# Running Locally
I included a pre-built version in the dist directory. After cloning the repo, open a terminal and navigate into Source/dist. 

Make sure you have a local web server available which you can install with 
```
npm install --global http-server
```
Then run the web server with 
```
http-server --cors
```
Note the IP address and port number that the server is using and open that path in a web browser.
http://127.0.0.1:8080/index.html

# Reading GLTF files
This project is intended for split GLTF files where there is a JSON part in {filename}.gltf and a binary part in {filename}.bin. Load both files together. 

