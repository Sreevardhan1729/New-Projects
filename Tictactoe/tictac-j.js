let turn = "X"
let player = "1"
let a = 0
let gameOver = false;
const changeTurn = () => {
    return turn === "X" ? "O" : "X"
}
const changeTurn1 = () => {
    return player === "1" ? "2" : "1"
}
//function to chect win
const checkWin = () => {
    let boxtextt = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, -13, 5, 0],
        [3, 4, 5, -13, 15, 0],
        [6, 7, 8, -13, 25, 0],
        [0, 3, 6, -23, 15, 90],
        [1, 4, 7, -13, 15, 90],
        [2, 5, 8, -3.2, 15, 90],
        [0, 4, 8, -13, 15, 45],
        [2, 4, 6, -13, 15, 135],
    ]
    wins.forEach(e => {
        if ((boxtextt[e[0]].innerText === boxtextt[e[1]].innerText) && (boxtextt[e[2]].innerText === boxtextt[e[1]].innerText) && (boxtextt[e[0]].innerText !== "")) {
            if (boxtextt[e[0]].innerText === "X") {
                document.querySelector('.info').innerText = "Player 1 Won";
            }
            else {
                document.querySelector('.info').innerText = "Player 2 Won";
            }
            gameOver = true;
            document.querySelector('.line').style.width = "35vw";
            document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
        }
    })
}
// Gamelogic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        a += 1;
        if (gameOver) {
            boxtext.innerText = '';
        }
        else if (!gameOver) {
            if (boxtext.innerText === '') {
                boxtext.innerText = turn;
                turn = changeTurn();
                player = changeTurn1();
                checkWin();
                if (a === 9) {
                    // document.getElementsByClassName("info")[0].innerText = "GameOver"
                    let boxtexts = document.querySelectorAll('.boxtext');
                    Array.from(boxtexts).forEach(element => {
                        element.innerText = ""
                    });
                    turn = "X"
                    player = "1"
                    gameOver = false
                    document.querySelector('.line').style.width = "0vw";
                    document.getElementsByClassName("info")[0].innerText = "Turn for player " + player
                }
                else if (!gameOver) {
                    document.getElementsByClassName("info")[0].innerText = "Turn for player " + player;
                }
            }

        }

    })
})
// add on click reser button
reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X"
    player = "1"
    gameOver = false
    document.querySelector('.line').style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText = "Turn for player " + player
})