"use strict";

module.exports = function(html) {
  var appDir = alquimia.getPath('appDir');
  var buildDir = alquimia.getPath('buildDir');
  var base = '/';

  if (alquimia.env === alquimia.ENV_PROD) {
    base = alquimia.config.productionBasePath || '/' + __dirname.split('/').slice(-3)[0] + '/' + buildDir + '/';
  } else if (!alquimia.server) {
    base += __dirname.split('/').slice(-3)[0] + '/' + appDir + '/';
  }

  html.head.children.push('<base href="' + base + '">');
  return html;
};
