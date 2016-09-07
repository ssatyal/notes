'use strict';

(function(){
  angular
  .module("notesapp", [])
  .controller("notes_controller", NotesController);

  function NotesController() {
    var vm = this;
    vm.notes = [
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
    vm.expand = function(note){
      angular.forEach(vm.notes, function (currentNote) {
        currentNote.showfull = currentNote === note && !currentNote.showfull;
    });
    };
    vm.destroy = function(note){
      var index = vm.notes.indexOf(note);
      vm.notes.splice(index, 1);
      console.log("click");
    };
  };
})();
