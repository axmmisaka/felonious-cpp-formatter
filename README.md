# README

An extension inspired by a meme.  
![meme](https://dev.azure.com/axmmisaka-github/066f4776-f1d1-4a14-8191-c76c1ef48377/_apis/git/repositories/84f148da-18f5-47cb-99c8-6c50bb55f265/Items?path=/.attachments/image-9e75995b-68bb-4cf8-a2c0-87eafcb8949e.png&download=false&resolveLfs=true&%24format=octetStream&api-version=5.0-preview.1&sanitize=true&versionDescriptor.version=wikiMaster)  

Then, I promised folks in a groupchat that I will make a linter (actually formatter) to achieve this goal... and here it is.  
![promise](https://dev.azure.com/axmmisaka-github/066f4776-f1d1-4a14-8191-c76c1ef48377/_apis/git/repositories/84f148da-18f5-47cb-99c8-6c50bb55f265/Items?path=/.attachments/image-899979ed-bd21-4301-b8a2-e531b9356a3e.png&download=false&resolveLfs=true&%24format=octetStream&api-version=5.0-preview.1&sanitize=true&versionDescriptor.version=wikiMaster)  

This formatter makes C/C++ Pythonic and ramps up your blood pressure. I think using it on actual code should be considered a felony.

## Usage
This is a formatter built with VS Code Formatter API. To call, choose `c` or `cpp` as the language, and select "format document" or use `Shift+Alt+F`.


For now, you must ensure all characters has the same width for it to work - no CJK characters, and you will need to convert tabs to spaces beforehand.  
![convert](https://dev.azure.com/axmmisaka-github/066f4776-f1d1-4a14-8191-c76c1ef48377/_apis/git/repositories/84f148da-18f5-47cb-99c8-6c50bb55f265/Items?path=/.attachments/image-1d3bb338-f3cc-4918-bce4-a5c24a4d9a3e.png&download=false&resolveLfs=true&%24format=octetStream&api-version=5.0-preview.1&sanitize=true&versionDescriptor.version=wikiMaster)  

## Showcases
With GNU Coreutils:  
![before](https://dev.azure.com/axmmisaka-github/066f4776-f1d1-4a14-8191-c76c1ef48377/_apis/git/repositories/84f148da-18f5-47cb-99c8-6c50bb55f265/Items?path=/.attachments/image-11f78adb-100b-4490-a476-53e942e567a0.png&download=false&resolveLfs=true&%24format=octetStream&api-version=5.0-preview.1&sanitize=true&versionDescriptor.version=wikiMaster)  
![after](https://dev.azure.com/axmmisaka-github/066f4776-f1d1-4a14-8191-c76c1ef48377/_apis/git/repositories/84f148da-18f5-47cb-99c8-6c50bb55f265/Items?path=/.attachments/image-870deb1d-7b9b-4130-aadd-2afe81f83da1.png&download=false&resolveLfs=true&%24format=octetStream&api-version=5.0-preview.1&sanitize=true&versionDescriptor.version=wikiMaster)

With Linux Kernel:
![before](https://dev.azure.com/axmmisaka-github/066f4776-f1d1-4a14-8191-c76c1ef48377/_apis/git/repositories/84f148da-18f5-47cb-99c8-6c50bb55f265/Items?path=/.attachments/image-f1d55a43-3333-4329-b551-53bf66a6e3ff.png&download=false&resolveLfs=true&%24format=octetStream&api-version=5.0-preview.1&sanitize=true&versionDescriptor.version=wikiMaster)
![after](https://dev.azure.com/axmmisaka-github/066f4776-f1d1-4a14-8191-c76c1ef48377/_apis/git/repositories/84f148da-18f5-47cb-99c8-6c50bb55f265/Items?path=/.attachments/image-1881f24c-5a8a-4059-b979-4eb960049ab6.png&download=false&resolveLfs=true&%24format=octetStream&api-version=5.0-preview.1&sanitize=true&versionDescriptor.version=wikiMaster)

## Licence
Please refer to LICENCE file. Note that VS Code Marketplace will not recognise this file correctly because Americans who can't spell proper English built it.