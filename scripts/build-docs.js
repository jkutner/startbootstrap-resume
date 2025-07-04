'use strict';
const fs = require('fs');
const upath = require('upath');
const sh = require('shelljs');

module.exports = function buildDocs() {
    const sourcePath = upath.resolve(upath.dirname(__filename), '../dist');
    const destPath = upath.resolve(upath.dirname(__filename), '../docs');
    
    // Remove existing docs folder
    sh.rm('-rf', destPath);
    
    // Create docs folder
    sh.mkdir('-p', destPath);
    
    // Copy all contents from dist to docs
    sh.cp('-R', `${sourcePath}/*`, destPath);
    
    console.log('✓ Built docs folder for GitHub Pages');
};

// Run directly if called as a script
if (require.main === module) {
    module.exports();
} 