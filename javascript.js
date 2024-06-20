//etch-a-sketch
const container = document.querySelector(".container");


//make grid for the play area, take user input or default to 16x16
function makeBoxes(dimension = 16) {
    for (let i = 0; i < dimension; i++) {
        const newRow = document.createElement("div");
        newRow.id = "r" + i;
        newRow.setAttribute("style","display: flex; flex: 1;");
        container.appendChild(newRow);
        for(let j = 0; j < dimension; j++) {
            const newDiv = document.createElement("div");
            newDiv.id = i + "," + j;
            newDiv.setAttribute("style","flex: 1; border-style: solid; border-color: black");
            newRow.appendChild(newDiv);            
        }
    }
}

makeBoxes();
