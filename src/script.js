Array.from(document.getElementsByClassName("note")).forEach(function (note){
    note.addEventListener("click", function() {
        console.log(note.id);
        document.getElementById(note.id).innerHTML = "<img src=/assets/notes/blue.png>";
    });
});