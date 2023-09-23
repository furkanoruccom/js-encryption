const fs = require('fs');
const JavaScriptObfuscator = require('javascript-obfuscator');

// Dosyanın adı
const inputFileName = 'input.js';
const outputFileName = 'output.js';

// Dosyanın içeriğini oku
fs.readFile(inputFileName, 'utf8', (err, data) => {
  if (err) {
    console.error('Dosya okunurken bir hata oluştu:', err);
    return;
  }

  // Kodu şifrele
  const obfuscatedCode = JavaScriptObfuscator.obfuscate(data, {
    compact: true,
    controlFlowFlattening: true,
    controlFlowFlatteningThreshold: 1,
    deadCodeInjection: true,
    deadCodeInjectionThreshold: 1,
    stringArray: true,
    rotateStringArray: true,
    unicodeEscapeSequence: true
  }).getObfuscatedCode();

  // Şifrelenmiş kodu yeni dosyaya kaydet
  fs.writeFile(outputFileName, obfuscatedCode, 'utf8', (err) => {
    if (err) {
      console.error('Dosya yazılırken bir hata oluştu:', err);
      return;
    }
    console.log('Kod başarıyla şifrelenip kaydedildi.');
  });
});
