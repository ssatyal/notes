'use strict';

(function(){
  angular
  .module("notesapp", [])
  .controller("notes_controller", NotesController);

  function NotesController() {
    //attach scope to variable vm
    var vm = this;
    //now we can attach properties to the NotesController for later retrieval
    //these notes will load when visiting the application & on refresh
    vm.notes = [
      { name: "Grocery List",   content: "buy a gallon of milk \nand if there are eggs, buy a dozen" },
      { name: "to do",  content: "build a notes application using AngularJS" },
      { name: "password",   content: "hunter2" }
    ];

    //expand function shows/hides notes based on click in browser
    vm.expand = function(note){
      angular.forEach(vm.notes, function (currentNote) {
        currentNote.showfull = currentNote === note && !currentNote.showfull;
      });
    };

    //this function deletes a note when clicking the cross button
    vm.destroy = function(note){
      var index = vm.notes.indexOf(note);
      vm.notes.splice(index, 1);
    };

    //function to grab html values in the new note area, attach them to the new_note object, then pass it to angular
    vm.new_note = {};
    var form_name = document.querySelector('#notename');
    var form_content = document.querySelector('#notecontent');
    vm.create = function() {
      vm.new_note = {name:form_name.value, content:form_content.value};
      vm.notes.push(angular.copy(vm.new_note));
      //clear out the forms when submitted:
      form_name.value="";
      form_content.value="";
    }
  };
})();
