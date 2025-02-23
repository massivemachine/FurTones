var note_grid = [[],[]];

document.getElementById("play").addEventListener("click", function() {
    console.log("play");
    getNotes();
});

document.getElementById("pause").addEventListener("click", function() {
    console.log("pause");
    // TODO: send request to pause
});

document.getElementById("clear").addEventListener("click", function() {
    console.log("clear");

    var hex = 'abcdef'.split('');

    // copy elements across note_grid into new array
    for (var row = 0; row < 7; row++) {

        for (var col = 1; col < 10; col++) {
            note_grid[[row,col]] = 0;
            document.getElementById(indexNote([row,col]) + "-im").innerHTML = "";
        }

        hex.forEach(function(index) {
            note_grid[[row,index]] = 0;
            document.getElementById(indexNote([row,index]) + "-im").innerHTML = "";
        });

        note_grid[[row,0]] = 0;
        document.getElementById(indexNote([row,0]) + "-im").innerHTML = "";

    }
    
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

// clalculates note grid index from id
function indexNote(coord) {
    var note = "";
    switch (coord[0]) {
        case 0: note += "e"; break;
        case 1: note += "d"; break;
        case 2: note += "c"; break;
        case 3: note += "b"; break;
        case 4: note += "a"; break;
        case 5: note += "g"; break;
        case 6: note += "f";
    }
    note += coord[1];
    return note;
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
    var note_grid_copy = [[],[],[],[],[],[],[]];

    var notes_counter = 0;

    var hex = 'abcdef'.split('');

    // copy elements across note_grid into new array
    for (var row = 0; row < note_grid_copy.length; row++) {

        notes_counter = 0;

        for (var col = 1; col < 10; col++) {
            note_grid_copy[row][notes_counter] = note_grid[[row,col]];
            notes_counter++;
        }

        hex.forEach(function(index) {
            note_grid_copy[row][notes_counter] = note_grid[[row,index]];
            notes_counter++;
        });

        note_grid_copy[row][notes_counter] = note_grid[[row,0]];

        notes_counter++;
    }

    // convert the played notes into their correct letter/rest form
    var played_notes = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];

    for (var col = 0; col < notes_counter; col++) {
        var rest = true;
        var col_counter = 0;
        for (var row = 0; row < note_grid_copy.length; row++) {

            if (note_grid_copy[row][col] == 1) {
                rest = false;

                switch (row) {
                    case 0: played_notes[col][col_counter] = "e"; break;
                    case 1: played_notes[col][col_counter] = "d"; break;
                    case 2: played_notes[col][col_counter] = "c"; break;
                    case 3: played_notes[col][col_counter] = "b"; break;
                    case 4: played_notes[col][col_counter] = "a"; break;
                    case 5: played_notes[col][col_counter] = "g"; break;
                    case 6: played_notes[col][col_counter] = "f";
                }

                col_counter ++;
            }
        }

        if (rest) {
            played_notes[col][0] = 'r';
        }
    }

    for (var row = 0; row < notes_counter; row++) {
        for (var col = 0; col < played_notes[row].length; col++) {
            console.log("Played note at row: " + row + " col: " + col + " : " + played_notes[row][col]);
        }
    }

    fetch("//10.229.116.123:5000", {
        method: "POST",
        body: JSON.stringify({
        title: "Play",
        played_notes
        }),
        headers: {
        "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then((response) => response.json())
        .then((json) => console.log(json));

}