var note_grid = [[],[]];

Array.from(document.getElementsByClassName("note")).forEach(function (note){
    note.addEventListener("click", function() {
        console.log(note.id);
        document.getElementById(note.id + "-im").innerHTML = "<img src=\"/assets/notes/blue.png\" width=\"50px\" height=\"30px\">";
    });
});

function noteToCoord(id) {
    coord = [];
    coord[0]
}