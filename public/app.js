'use strict';

(function(){
  angular
  .module("notesapp", [
    "ui.router",
    "ngResource",
  ])
  .config([
    "$stateProvider",
    Router
  ])
  .controller("notes_controller", NotesController);

  function Router($stateProvider, $locationProvider){
    $stateProvider
    .state("welcome", {
      url: "/",
      templateUrl: "welcome.html",
      controller: "notes_controller"
    })
  }
  function NotesController() {
    var vm = this;
    vm.notes = ["one","two","three"];
    console.log(vm.notes);
  }
})();


/*
[
  {
    name: "First Note",
    content: "do something"
  },
  {
    name: "Second Note",
    content: "do another thing"
  },
  {
    name: "Third Note",
    content: "third thing"
  }
];
*/
