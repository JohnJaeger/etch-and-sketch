let squaresPerSide = 16;

const userInput = document.querySelector("#user-input");
const enterButton = document.querySelector("#enter-button");
const etchSketch = document.querySelector("#etch-sketch");

const ETCH_SKETCH_WIDTH = 720;
const ETCH_SKETCH_HEIGHT = 720;

function createRow(){
    let newRow = document.createElement("div");
    newRow.classList.add("row");
    newRow.style.height = (ETCH_SKETCH_HEIGHT / squaresPerSide) + "px";
    for (let i=0; i < squaresPerSide; i++){
        let newSquare = document.createElement("div");
        newSquare.classList.add("square");
        newSquare.style.height = (ETCH_SKETCH_HEIGHT / squaresPerSide) + "px";
        newSquare.style.width = (ETCH_SKETCH_WIDTH / squaresPerSide) + "px";
        newSquare.style.opacity = 0;
        newRow.appendChild(newSquare);
    }
    etchSketch.appendChild(newRow);
}

function createEtchSketch(){
    for(let i=0; i < squaresPerSide; i++){
        createRow();
    }
}

function removeEtchSketch(){
    const allRows = document.querySelectorAll(".row");
    allRows.forEach(function(row){
        row.remove();
    });
}

etchSketch.addEventListener("mouseover", function(e){
    if (e.target.classList == "square"){
        e.target.style.backgroundColor = "rgb(" + (Math.random() * 255) + ", " + (Math.random() * 255) + ", " + (Math.random() * 255) + ")";
        if (Number(e.target.style.opacity) < 1){
            e.target.style.opacity = Number(e.target.style.opacity) + 0.1;
        }
    }
});

etchSketch.addEventListener("mouseleave", function(e){
    const allSquares = document.querySelectorAll(".square");
    allSquares.forEach(function(square){
        square.style.backgroundColor = "white";
        square.style.opacity = 0;
    });
});

enterButton.addEventListener("click", function(e){
    if (isNaN(Number(userInput.value)) === false){
        if (Number(userInput.value) <= 100){
            if (userInput.value > 0){
                squaresPerSide = Number(userInput.value);
                removeEtchSketch();
                createEtchSketch();
            } else {
                alert("Number must be greater than 0");
            }
        } else {
            alert("Number must be less than 100");
        }
    } else {
        alert("Squares per side must be a number");
    }
});

createEtchSketch();