let lines = gets().split('\n');

let line = lines.shift().split(" ");
let inicio = parseInt(line[0]);
let final = parseInt(line[1]);

if (inicio >= 0 && final <= 2) {
    print('nova');
} else if (final > inicio && final <= 96) {
    print('crescente');
} else if (inicio > final && final >= 3 && final <= 96) {
    print('minguante');                 //complete o código nos espaços em branco
} else { 
    print('cheia');
}