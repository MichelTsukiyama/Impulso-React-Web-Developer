const maca = {
    value: 2
}

const laranja = {
    value: 3
}

function mapComThis(array, thisArg) {
    return array.map(function(item){
        return item * this.value;
    }, thisArg)
}

console.log("this = maca ", mapComThis([1, 2, 3, 4], maca));
console.log("this = laranja ", mapComThis([1, 2, 3, 4], laranja));

const num = [1, 2, 3, 4];

function mapSemThis(array){
    return array.map((array) =>  array * 2)
}

console.log("sem this ", mapSemThis(num))
console.log(num) //map não altera o array original