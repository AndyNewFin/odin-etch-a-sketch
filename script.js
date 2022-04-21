// TOP Project: Etch-A-Sketch

const container = document.querySelector(".container");
const btnClear = document.querySelector("#clearBtn");
const btnNew = document.querySelector("#newBtn");

// fuction grid creates a forloop: starts with zero boxes highlighted and listens to an event of the mousse curser passing over; starts with a grid of 16 boxes
function grid() {
    for (let i = 0; i < 16; i++) {
        for (let g = 0; g < 16; g++) {
            let element = document.createElement("div");
            element.className = "child";
            element.addEventListener("mouseover", e => {
                e.target.style.backgroundColor = "pink";
            })
            container.appendChild(element);
        }
    }
}

grid();

function makeGrid(grid) {
    container.innerHTML = "";
    for (let i = 0; i < grid; i++) {
        for (let g = 0; g < grid; g++) {
            let element = document.createElement("div");
            element.className = "child";
            let numGridsize = 40 / grid;
            element.style.width = `${numGridsize}rem`;
            element.style.height = `${numGridsize}rem`;
            element.addEventListener("mouseover", e => {
                e.target.style.backgroundColor = "pink";
            })
            container.appendChild(element);
        }
    }
}

// Button that clears previous highlighting
btnClear.addEventListener("click", () => {
    let childs = document.querySelectorAll(".child");
    childs.forEach(child => {
        child.style.backgroundColor = "white";
    });
});

// New Grid button that prompts Enter a New Number; Creates a new grid with user entered amount
btnNew.addEventListener("click", () => {
    let result = prompt("Enter a number", 16);
    result = parseInt(result);
    makeGrid(result);
});
