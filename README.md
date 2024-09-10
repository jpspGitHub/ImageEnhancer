# Image Enhancer

Image Enhancer is a Node.js command-line tool that optimizes and converts images to WebP format for better performance and quality on the web. It allows you to resize images for mobile and desktop views and handles various image extensions.

## Installation

To install the Image Enhancer globally, run:

npm install -g image-enhancer

### Usage
To use the Image Enhancer, run the following command:

image-enhancer ./source ./target .png --force

Arguments
<source-path>: Path to the source folder containing images.
<target-path>: Path to the target folder for output images.
[image-extension]: (Optional) Extension of source images, defaults to .jpg.
[--force]: (Optional) Force overwrite existing files.
Example
This command will process images in the ./source folder with the .png extension and save the optimized images to the ./target folder, forcing overwrite of existing files if necessary.

Options
--help, -h: Display the help message with usage instructions.
Contributing
Contributions are welcome! Please follow these steps to contribute:

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes.
Commit your changes (git commit -m 'Add new feature').
Push to the branch (git push origin feature-branch).
Create a new Pull Request.
License
This project is licensed under the MIT License. See the LICENSE file for details.