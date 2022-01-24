const StyleDictionaryPackage = require("style-dictionary");

// Return config based on brand name
function getStyleDictionaryConfig(brand) {

  return {
    "source": [
      `tokens/transformed/${brand}.json`
    ],
    "platforms": {
      "web": {
        "transforms": ["attribute/cti", "name/cti/kebab", "color/hex", "size/px"],
        "buildPath": "src/styles/",
        "files": [{
          "destination": `${brand}.css`,
          "format": "css/variables",
          "options": {
            selector: (brand !== 'global') ? `.${brand}` : false,
            showFileHeader: false
          }
        }]
      }
    }
  }
}

console.log('Style dictionary build started..');

['global', 'brand-one'].map(function (brand) {
    const StyleDictionary = StyleDictionaryPackage.extend( getStyleDictionaryConfig(brand));
    StyleDictionary.buildPlatform('web');
})

console.log('Style dictionary build complete!');