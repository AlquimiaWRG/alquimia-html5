"use strict";

module.exports = function(done) {
  alquimia.config.productionBasePath = '/' + alquimia.config.appName.dashed + '/' + alquimia.getPath('buildDir') + '/';
  done();
};
