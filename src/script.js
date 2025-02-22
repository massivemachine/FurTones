Array.from(document.getElementsByClassName("note")).forEach(function (note){
    note.addEventListener("click", function() {
        console.log(note.id);
    });
});