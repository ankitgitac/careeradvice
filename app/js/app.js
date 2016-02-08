"use strict";
angular.module("careeradvice", [
  "constants",
  "ui.router",
  "templates"
])
.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state("home", {
    url: "/",
    templateUrl: "main/views/home.html",
    controller: "MainController",
    controllerAs: "main"
  });

  $urlRouterProvider.otherwise("/");
})
;
