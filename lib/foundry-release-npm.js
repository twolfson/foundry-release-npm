var fs = require('fs');
var shell = require('shelljs');

exports.updateFiles = function (params, cb) {
  // TODO: Consider async stream mutate file onto itself
  var pkgJson = fs.readFileSync('package.json', 'utf8');
  var pkg = JSON.parse(pkgJson);
  pkg.version = params.version;
  var output = JSON.stringify(pkg, null, 2);
  fs.writeFile('package.json', output, 'utf8', cb);
};

exports.publish = function (params, cb) {
  // If the package.json does not contain a 'private: true', publish it
  var pkgJson = fs.readFileSync('package.json', 'utf8');
  var pkg = JSON.parse(pkgJson);
  if (!pkg['private']) {
    // TODO: Don't let this live as sync. Use spawn with forwarding to stdio.
    shell.exec('npm publish');
  }
  process.nextTick(cb);
};
