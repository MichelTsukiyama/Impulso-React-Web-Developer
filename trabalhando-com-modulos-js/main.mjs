//Named 

import { mostraIdade } from "./funcoes.mjs";

//Default

import mostraHobby from "./funcoes.mjs";


//Trocando nome de imports

import {mostraCidade as fc} from './funcoes.mjs'

//Todos os imports de um arquivo

import * as Aula from './funcoes.mjs'

console.log(mostraIdade('José', 30));
console.log(fc('Antonio', 'São Paulo'));
console.log(mostraHobby('Stephany', 'Lecionar'));
console.log(Aula.mostraIdade('Gabriel', 7 ));

//Obs. não esquecer de usar type="module"