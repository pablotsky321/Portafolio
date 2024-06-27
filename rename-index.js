const fs = require('fs');
const path = require('path');

const projectPath = path.join(__dirname, 'dist', 'portafolio', 'browser');
const oldFileName = path.join(projectPath, 'index.csr.html');
const newFileName = path.join(projectPath, 'index.html');

// Renombrar index.csr.html a index.html
fs.rename(oldFileName, newFileName, (err) => {
  if (err) {
    console.error('Error al renombrar el archivo:', err);
    process.exit(1);
  }
  console.log('Renombrado index.csr.html a index.html');

  // Ejecutar el comando angular-cli-ghpages
  const { exec } = require('child_process');
  exec('npx angular-cli-ghpages --dir=dist/portafolio/browser', (err, stdout, stderr) => {
    if (err) {
      console.error('Error al ejecutar angular-cli-ghpages:', err);
      process.exit(1);
    }
    console.log(stdout);
    console.error(stderr);
  });
});
