const Gameboard = (() => {
    let gameboard = ["", "", "", "", "", "", "", "", ""];

    const render = () => {
        let board = "";
        gameboard.forEach((square, index) => {
            board += `<div class=square id=square-${index}>${square}</div>`
        })
    }
    document.querySelector("#gameboard").innerHTML = board;

    return {
        render,
    }
})

const createPlayer = (name, mark) => {
    return {
        name,
        mark
    }
}

const Game = (() => {
    let players = [];
    let currentPlayerIndex = 0;
    let gameOver = false;

    const start = () => {
        players = [
            createPlayer(document.querySelector("#player-one").value, "X"),
            createPlayer(document.querySelector("#player-two").value, "O")
        ]
    }
})();

const startBtn = document.querySelector("#start-button")
startBtn.addEventListener("click", ()=> {
    // Game.start();
})