"use strict";

module.exports = function(done) {
  delete alquimia.config.productionBasePath;
  done();
};
