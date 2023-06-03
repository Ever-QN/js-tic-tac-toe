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

const startBtn = document.querySelector("#start-button")
startBtn.addEventListener("click", ()=> {
    // Game.start();
})