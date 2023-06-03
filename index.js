const Gameboard = (() => {
    let gameboard = ["", "", "", "", "", "", "", "", ""];

    const render = () => {
        let board = "";
        gameboard.forEach((square, index) => {
            board += `<div class=square id="square-${index}">${square}</div>`
        })
        document.querySelector("#gameboard").innerHTML = board;
        const squares = document.querySelectorAll(".square");
        squares.forEach((square) => {
            square.addEventListener("click", Game.handleClick);
        })
    }

    const update = (index, value) => {
        gameboard[index] = value;
        render();
    }

    const getGameboard = () => gameboard;

    return {
        render,
        update,
        getGameboard
    }
})();

const createPlayer = (name, mark) => {
    return {
        name,
        mark
    }
}

const Game = (() => {
    let players = [];
    let currentPlayerIndex = 0;
    let gameOver;

    const start = () => {
        players = [
            createPlayer(document.querySelector("#player-one").value, "X"),
            createPlayer(document.querySelector("#player-two").value, "O")
        ]
        currentPlayerIndex = 0;
        gameOver = false;
        Gameboard.render();
    }

    const handleClick = (event) => {
        let index = parseInt(event.target.id.split("-")[1]);

        if (Gameboard.getGameboard()[index] !== "")
            return;
        Gameboard.update(index, players[currentPlayerIndex].mark);
        currentPlayerIndex = currentPlayerIndex === 0 ? 1 : 0;
    }
    const restart = () => {
        for (let i = 0; i < 9; i++) {
            Gameboard.update(i, "");
        }
        Gameboard.render();
    }

    return {
        start,
        restart,
        handleClick,
    }
})();

const restartBtn = document.querySelector("#restart-button");
restartBtn.addEventListener("click", () => {
    Game.restart();
})

const startBtn = document.querySelector("#start-button")
startBtn.addEventListener("click", ()=> {
    Game.start();
})