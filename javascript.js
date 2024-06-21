//etch-a-sketch
const start = document.querySelector("#start");
const container = document.querySelector(".container");


//make grid for the play area, take user input or default to 16x16
function makeBoxes(dimension = 16) {
    container.replaceChildren();
    container.style.background = "white";
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

start.addEventListener("click", (event) => {
    let dimension = prompt("Enter an integer between 1 and 100");
    while (dimension < 1 || dimension > 100) {
        dimension = prompt("Please only enter integers between 1 and 100");
    }
    makeBoxes(dimension);
})

container.addEventListener("mouseover", (event) => {
    let target = event.target;
    target.style.background = "blue";
})

container.addEventListener("mouseout", (event) => {
    let target = event.target;
    target.style.background = "aqua";
})