//etch-a-sketch

function makeBoxes(dimension = 16) {
    const container = document.querySelector(".container");
    for (let i = 0; i < dimension; i++) {
        let newRow = document.createElement("div");
        newRow.id = "r" + i;
        newRow.setAttribute("style","display: flex; flex: 1;");
        container.appendChild(newRow);
        for(let j = 0; j < dimension; j++) {
            let newDiv = document.createElement("div");
            newDiv.id = i + "," + j;
            newDiv.setAttribute("style","flex: 1; border-style: solid; border-color: black");
            newRow.appendChild(newDiv);            
        }
    }
}

makeBoxes();