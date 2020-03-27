
//Randomly assign 'it' to one of the 'cell'
const generateRandom: number = Math.floor(Math.random() * 15 );

//Implement queryselector
const cells: NodeListOf<Element> = document.querySelectorAll(".cell");


//Assigned 'it' to 'cell'
cells[generateRandom].id = 'it';

//Created a list of 'cell' that have been clicked
const clickedCells: HTMLElement[] = [];

// interface ClickedCells {
//     backgroundColor: string;
// }

//Created a function to change color
const changeColor = (event) => {
    if (event.target.classList.contains('cell')){
        event.target.style.backgroundColor = 'green';
        clickedCells.push(event.target);
    }

    if ( event.target.id === 'it') {
        for (let cells of clickedCells) {
            cells.style.backgroundColor = 'yellow';
        }
    
    event.target.style.backgroundColor = 'red';
    event.target.parentElement.innerHTML = event.target.parentElement.innerHTML;
    }
    
}
// Add function to the 'cell'
for (let i =0; i < cells.length; i++) {
    cells[i].addEventListener('click', (event) => changeColor(event)); 
}





