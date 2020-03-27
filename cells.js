//Randomly assign 'it' to one of the 'cell'
var generateRandom = Math.floor(Math.random() * 15);
//Implement queryselector
var cells = document.querySelectorAll(".cell");
//Assigned 'it' to 'cell'
cells[generateRandom].id = 'it';
//Created a list of 'cell' that have been clicked
var clickedCells = [];
// interface ClickedCells {
//     backgroundColor: string;
// }
//Created a function to change color
var changeColor = function (event) {
    if (event.target.classList.contains('cell')) {
        event.target.style.backgroundColor = 'green';
        clickedCells.push(event.target);
    }
    if (event.target.id === 'it') {
        for (var _i = 0, clickedCells_1 = clickedCells; _i < clickedCells_1.length; _i++) {
            var cells_1 = clickedCells_1[_i];
            cells_1.style.backgroundColor = 'yellow';
        }
        event.target.style.backgroundColor = 'red';
        event.target.parentElement.innerHTML = event.target.parentElement.innerHTML;
    }
};
// Add function to the 'cell'
for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', function (event) { return changeColor(event); });
}
