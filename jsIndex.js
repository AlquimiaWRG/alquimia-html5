"use strict";

module.exports = function(defaultJs) {
  defaultJs.getElement('configs').push(
    "module.config(['$locationProvider', function($locationProvider) {",
    "  $locationProvider.html5Mode(true).hashPrefix('!');",
    "}]);",
    ""
  );

  return defaultJs;
};
