var note_grid = [[],[]];

document.getElementById("play").addEventListener("click", function() {
    console.log("play");
    getNotes();
});

document.getElementById("pause").addEventListener("click", function() {
    console.log("pause");
});

console.log("test");

// note button functionality
Array.from(document.getElementsByClassName("note")).forEach(function (note){
    note_grid[noteIndex(note.id)] = 0;

    console.log(document.getElementById(note.id + "-im").style.left);
    document.getElementById(note.id + "-im").style.left = getOffset(note).left + "px";
    document.getElementById(note.id + "-im").style.top = getOffset(note).top; + "px"

    note.addEventListener("mouseover", function() {
        console.log(note.id,note_grid[noteIndex(note.id)]);
        
        if (note_grid[noteIndex(note.id)] == 0) {
            if (note.id.slice(0,1) != 'f') {
                document.getElementById(note.id + "-im").innerHTML = "<img src=\"/assets/notes/clear/"+ note.id.slice(0,1) + "-clear.png\" width=\"70px\" height=\"40px\">";
            } else {
                document.getElementById(note.id + "-im").innerHTML = "<img src=\"/assets/notes/clear/"+ note.id.slice(0,1) + "1-clear.png\" width=\"70px\" height=\"40px\">";
            }
        }
    });

    note.addEventListener("mouseout", function() {
        console.log(note.id,note_grid[noteIndex(note.id)]);
        
        if (note_grid[noteIndex(note.id)] == 0) {
            document.getElementById(note.id + "-im").innerHTML = "";
        }
    });


    note.addEventListener("click", function() {
        console.log(note.id,note_grid[noteIndex(note.id)]);
        console.log(note_grid.length);
        console.log(note_grid[0].length);
        console.log(noteIndex(note.id));
        
        if (note_grid[noteIndex(note.id)] == 0) {
            note_grid[noteIndex(note.id)] = 1;
            if (note.id.slice(0,1) != 'f') {
                document.getElementById(note.id + "-im").innerHTML = "<img src=\"/assets/notes/solid/"+ note.id.slice(0,1) + ".png\" width=\"70px\" height=\"40px\">";
            } else {
                document.getElementById(note.id + "-im").innerHTML = "<img src=\"/assets/notes/solid/"+ note.id.slice(0,1) + "1.png\" width=\"70px\" height=\"40px\">";
            }
        } else {
            note_grid[noteIndex(note.id)] = 0;
            document.getElementById(note.id + "-im").innerHTML = "";
        }
        
    });

});

// clalculates note grid index from id
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

// gets elements x y position relative to page
function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY
    };
}

// return the notes placed on the stave
function getNotes() {
    console.log(note_grid.length);
    console.log(note_grid[0].length);
    for (var col = 0; col < 8; col++) {
        for (var row = 0; row < 4; row++) {
            console.log("value: " + note_grid[[row,col]]);
        }
        console.log("next");
    }
}