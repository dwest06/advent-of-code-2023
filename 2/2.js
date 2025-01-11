const fs = require('fs');
const file = './test.txt';
// const file = './test1.txt';

function getLines(){
    return fs.readFileSync(file, 'utf-8').toString().split('\n');
}

function sumPalabras(arr) {
    let sum = 0;

    arr.forEach(element => {
        console.log(element)
        sum += parseInt(element)
    });

    console.log(`SUM: ${sum}`);
}

/** *********** */

function isNumeric(s) {
    return !isNaN(s - parseInt(s));
}

const red = 12;
const green = 13;
const blue = 14;

const lines = getLines()
let games = []

for( let line of lines){
    let colors = {
        red: 0,
        green: 0,
        blue: 0
    }

    let aux = line.split(":")
    // Game
    let game = aux[0].split(" ")[1]

    let sets = aux[1].replaceAll(",","").split(";")

    for( let set of sets){
        let turn = set.split(" ");
        for( let i = 0; i < turn.length; i++){
            if (isNumeric(turn[i])){
                if (turn[i + 1] === 'blue')
                    colors.blue = parseInt(turn[i]) > colors.blue ? parseInt(turn[i]) : colors.blue;
                else if (turn[i + 1] === 'red')
                    colors.red = parseInt(turn[i]) > colors.red ? parseInt(turn[i]) : colors.red;
                else if (turn[i + 1] === 'green')
                    colors.green = parseInt(turn[i]) > colors.green ? parseInt(turn[i]) : colors.green;

            }
        }
    }

    // PART1
    // if (colors.red <= red && colors.blue <= blue && colors.green <= green){
    //     console.log(game)
    //     games.push(game);
    // }

    // PART2
    games.push(colors.red * colors.green * colors.blue)
}

sumPalabras(games)