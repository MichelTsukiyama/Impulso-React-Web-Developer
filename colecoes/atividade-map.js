//Crie uma função que retorna o nome dos membros de um Map que tem o papel 'ADMIN' no sistema
//1. Crie uma função getAdmins que recebe um map
//2. Crie um Map e popule-o com nomes de usuários e seus papéis no sistema (ex.: 'Luiz' => 'Admin')
//3. Dentro de getAdmins, utilize o llop for...of para retornar uma lista com os nomes dos usuários que são administradores.

const myMap = new Map();

myMap.set('Luiz', 'Admin')
myMap.set('Stephany', 'Admin')
myMap.set('Jorge', 'User')
myMap.set('Natália', 'User')
myMap.set('André', 'Admin')

function getAdmins (map) {
    let admins = []
    for( [key, value] of map){
        if(value === 'Admin'){
            admins.push(key)
        }
    }
    return admins;
}

console.log(getAdmins(myMap))