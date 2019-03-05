var path = require('path'),
  fs = require('fs');

function copyFile(src, dest) {
  let readStream = fs.createReadStream(src);

  readStream.once('error', err => {});

  readStream.once('end', () => {});

  readStream.pipe(fs.createWriteStream(dest));
}

function fromDir(startPath, filter) {
  //console.log('Starting from dir '+startPath+'/');

  if (!fs.existsSync(startPath)) {
    console.log('no dir ', startPath);
    return;
  }

  var files = fs.readdirSync(startPath);

  for (var i = 0; i < files.length; i++) {
    var filename = path.join(startPath, files[i]);
    var stat = fs.lstatSync(filename);
    if (stat.isDirectory()) {
      fromDir(filename, filter); //recurse
    } else if (filename.indexOf(filter) >= 0) {
      copyFile(filename, './lib/services/components/resources/' + files[i]);
    }
  }
}

fromDir('./src/services/components/resources', '.json');
