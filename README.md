movecontrolnet - two handy tampermonkey scripts if you want to change your Stable Diffusion webUI in a hacky way:

A. cnaboveimages.js moves the controlnet-tab **above the image results** 

B. cninbetween.js moves the controlnet-tab **between the settings and the image results**

Works in txt2img and img2img-tab
Tested with Firefox Tampermonkey extension and Stable Diffusion repos automatic1111, vladmandic and anapnoe. 
Works in Firefox for me. If it doesn't work, its likely due to ad blockers or similar extensions. 

Installation:
1. Install Tampermonkey
2. View the scriptfile and click the Raw button at the top of the file to view its source
3. Copy the source
4. Open Tampermonkey in your browser and add a script
5. Paste the source into the script window and hit save.
6. Run your browser / start the webui
