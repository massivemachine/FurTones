var note_grid = [[],[]];


Array.from(document.getElementsByClassName("note")).forEach(function (note){
    note_grid[noteIndex(note.id)] = 0;
    note.addEventListener("click", function() {
        console.log(note.id,note_grid[noteIndex(note.id)]);
        if (note_grid[noteIndex(note.id)] == 0) {
            note_grid[noteIndex(note.id)] = 1;
            document.getElementById(note.id + "-im").innerHTML = "<img src=\"/assets/notes/blue.png\" width=\"70px\" height=\"40px\">";
        } else {
            note_grid[noteIndex(note.id)] = 0;
            document.getElementById(note.id + "-im").innerHTML = "";
        }
        
    });
});


function noteIndex(id) {
    var coord = [];
    switch (id.slice(0,1)) {
        case "e": coord[0] = 0; break;
        case "d": coord[0] = 1; break;
        case "c": coord[0] = 2; break;
        case "b": coord[0] = 3; break;
        case "a": coord[0] = 4; break;
        case "g": coord[0] = 5; break;
        case "f": coord[0] = 6;
    }
    coord[1] = id.slice(1,2);
    return coord;
}