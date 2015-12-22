"use strict";

module.exports = function(defaults) {
  defaults.getElement('configs').push(
    "module.config(['$locationProvider', function($locationProvider) {",
    "  $locationProvider.html5Mode(true).hashPrefix('!');",
    "}]);",
    ""
  );

  return defaults;
};
