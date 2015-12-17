"use strict";

module.exports = function(html) {
  var base = '/';

  if (alquimia.env === alquimia.ENV_PROD) {
    base += __dirname.split('/').slice(-3)[0] + '/prod/';
  } else if (alquimia.config.packages.indexOf('livereload') < 0) {
    base += __dirname.split('/').slice(-3)[0] + '/app/';
  }

  html.head.children.push('<base href="' + base + '">');
  return html;
};
