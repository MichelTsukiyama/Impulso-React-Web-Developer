function validaArray(array, num) {
    
    try {
        if(!array && !num) throw new ReferenceError("Envie os parâmetros");

        if(typeof array !== 'object') throw new TypeError("Array precisa ser do tipo object");

        if(typeof num !== 'number') throw new TypeError('Número precisa ser do tipo number');

        if(array.length !== num) throw new RangeError("Tamanho do Array diferente do número");
        
        return array;
    }
    catch(e) {
        if(e instanceof ReferenceError){
            console .log("Este erro é um ReferenceError")
            console.log(e.name)
            console.log(e.stack)
        } else if (e instanceof TypeError){
            console.log("Este erro é um TypeError")
            console.log(e.name)
        } else if (e instanceof RangeError){
            console.log("Este erro é um RangeError")
            console.log(e.stack)
        } else {
            console.log("Tipo de erro não esperado: " + e)
        }
    }    
}

console.log(validaArray())
console.log(validaArray('number', 1))
console.log(validaArray([1, 2, 5], 2))
console.log(validaArray([1, 2, 5], 'a'))
console.log(validaArray([1, 2, 5], 3))