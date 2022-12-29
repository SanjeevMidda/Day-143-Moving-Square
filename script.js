let squares = document.querySelectorAll(".container div");

console.log(squares);

function randomSquare(){
    squares.forEach(remove =>{
        remove.style.backgroundColor = "white";
    })

    let selectedSquare = squares[Math.floor(Math.random()*squares.length)];

    selectedSquare.style.backgroundColor = "blue";

    console.log(selectedSquare.id);
}

let interval = setInterval(randomSquare, 500);