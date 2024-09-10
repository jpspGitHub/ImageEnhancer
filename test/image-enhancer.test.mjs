import { exec as execCallback } from 'child_process';
import { expect } from 'chai';
import fs from 'fs';
import path from 'path';
import { promisify } from 'util';

const exec = promisify(execCallback);

describe('Image Enhancer CLI', function() {
  const sourcePath = './test/source';
  const targetPath = './test/target';
  const imageExtension = '.jpeg';
  const forceFlag = '--force';
  const baseTestImage = 'test.jpeg';
  const baseTestFolder = 'test';
  before(function() {
    // Setup test directories and files
    if (!fs.existsSync(sourcePath)) {
      fs.mkdirSync(sourcePath, { recursive: true });
    }
    if (!fs.existsSync(targetPath)) {
      fs.mkdirSync(targetPath, { recursive: true });
    }
    // Create a dummy image file
    fs.copyFileSync(path.join(baseTestFolder, `${baseTestImage}`), path.join(sourcePath, `test${imageExtension}`));
  });

  after(function() {
    // Cleanup test directories and files
    fs.rmSync(sourcePath, { recursive: true, force: true });
    fs.rmSync(targetPath, { recursive: true, force: true });
  });

  it('should display help message', async function() {
    const { stdout } = await exec('node bin/image-enhancer --help');
    expect(stdout).to.include('Usage: image-enhancer');
  });

  it('should throw error if source and target paths are not specified', async function() {
    try {
      await exec('node bin/image-enhancer');
    } catch ({ stderr }) {
      expect(stderr).to.include('Error: Source and target paths must be specified.');
    }
  });

  it('should process images and create output files', async function() {
    await exec(`node bin/image-enhancer ${sourcePath} ${targetPath} ${imageExtension} ${forceFlag}`);
    const mobileOutput = path.join(targetPath, 'test_mobile.webp');
    const desktopOutput = path.join(targetPath, 'test_desktop.webp');
    expect(fs.existsSync(mobileOutput)).to.be.true;
    expect(fs.existsSync(desktopOutput)).to.be.true;
  });
});