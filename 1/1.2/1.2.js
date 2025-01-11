const fs = require('fs');
const file = './test.txt';
// const file = './test1.txt';

const writeFile = './output.txt'

function getPalabras(){
    return fs.readFileSync(file, 'utf-8').toString().split('\n');
}

function sumPalabras(arr) {
    let sum = 0;

    arr.forEach(element => {
        // console.log(element)
        sum += parseInt(element)
    });

    console.log(`SUM: ${sum}`);
}

/** *********** */

const numberWordList = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine'
]

const numberObject = {
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9
}

function isNumeric(s) {
    return !isNaN(s - parseInt(s));
}


function z(x){
    return x.map( item => {
        let n1;
        let n2;

        number1:
        for( let i = 0; i < item.length; i++){
            if (isNumeric(item[i])){
                n1 = item[i];
                break;
            }

            for (let number of numberWordList){
                if ( item.substring(i, i + number.length) === number ){
                    n1 = item.substring(i, i + number.length);
                    break number1;
                }
            }
        }
        
        number2:
        for( let i = item.length - 1; i >= 0; i--){
            if (isNumeric(item[i])){
                n2 = item[i];
                break;
            }

            for (let number of numberWordList){
                if ( item.substring(i, i + number.length) === number ){
                    n2 = item.substring(i, i + number.length);
                    break number2;
                }
            }
        }
        
        let final = '';
        if (isNumeric(n1))
            final += n1
        else 
        final += numberObject[n1]

        if (isNumeric(n2))
            final += n2
        else 
        final += numberObject[n2]
        return final 
    })
}


const solution = z(getPalabras())

sumPalabras(solution)