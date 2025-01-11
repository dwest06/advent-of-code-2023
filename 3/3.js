const fs = require('fs');
// const file = './test.txt';
const file = './test1.txt';

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

let lines = getLines()
let matrix = []

let solutions = []

for( let line of lines){
    matrix.push(line.split(""))
}

for(let i = 0; i < matrix.length; i++){

    let startIndex = 0;
    let endIndex = 0;

    for(let j = 0; j < matrix[i].length; j++){

        // Verificar si es numero
        if( isNumeric(matrix[i][j]) ){
            startIndex = j
            // Ver cuantos numero tiene por delante
            for (let k = j; k < matrix[i].length; k++){
                if( !isNumeric(matrix[i][k]) ){
                    j = k -1;
                    break;
                }
            }

            endIndex = j;

            console.log(`j: ${j} s: ${startIndex} e: ${endIndex}`)

            // coord:
            // Luego de saber los indices verificar los alrededores
            for (let k = startIndex; k <= endIndex; k++){
                // Verificar esquinas iniciales
                if( k === startIndex){
                    start:
                    for (let x = i - 1; x <= i + 1; x++){
                        for(let y = k-1; y <= k; y++){
                            if(x < 0 || x > matrix.length - 1 || y < 0 || y > matrix.length - 1) continue;
                            if (matrix[x][y]!= '.' && !isNumeric(matrix[x][y])){
                                // Guardamos coordenadas
                                solutions.push([i,startIndex,endIndex])
                                break start;
                            }
                        }
                    }
                }

                else if( k === endIndex){
                    end:
                    for (let x = i - 1; x <= i + 1; x++){
                        for(let y = k; y <= k + 1; y++){
                            if(x < 0 || x > matrix.length - 1 || y < 0 || y > matrix.length - 1) continue;
                            if (matrix[x][y]!= '.' && !isNumeric(matrix[x][y])){
                                // Guardamos coordenadas
                                solutions.push([i,startIndex,endIndex])
                                break end;
                            }
                        }
                    }
                }

                else {
                    if(i - 1 < 0 || i - 1 > matrix.length - 1 || i + 1 > matrix.length - 1) continue;
                    if (matrix[i-1][k]!= '.' && !isNumeric(matrix[i-1][k]) || 
                        matrix[i+1][k]!= '.' && !isNumeric(matrix[i+1][k])){
                        // Guardamos coordenadas
                        solutions.push([i,startIndex,endIndex])
                        // break coord;
                    }
                }

            }
        }

    }
}

let sum = 0;

for( let line of solutions){
    let number = '';

    for( let j = line[1] ; j <= line[2]; j++){
        number += matrix[line[0]][j];
    }

    // console.log(number);

    sum += parseInt(number);
}

console.log(sum);