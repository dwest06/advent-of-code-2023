const fs = require('fs');

function isNumeric(s) {
    return !isNaN(s - parseInt(s));
}

function z(x){
    return x.map( item => {
        let n1;
        let n2;
        for( let i = 0; i < item.length; i++){
            if (isNumeric(item[i])){
                n1 = parseInt(item[i]);
                break;
            }
        }
    
        for( let i = item.length - 1; i >= 0; i--){
            if (isNumeric(item[i])){
                n2 = parseInt(item[i]);
                break;
            }
        }
    
        return `${n1}${n2}`
    })
}

const file = './test.txt';
// const file = './test1.txt';

const writeFile = './output.txt'

const palabras = fs.readFileSync(file, 'utf-8').toString().split('\n');

let y = z(palabras)

let sum = 0;

y.forEach(element => {
    sum += parseInt(element)
});

console.log(sum);

fs.writeFileSync(writeFile, y.join('\n'), 'utf-8');
