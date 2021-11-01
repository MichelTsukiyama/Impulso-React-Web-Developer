let X = 0;
let alcool = 0;
let gasolina = 0;
let diesel = 0;

while (X !== 4) {
  X = parseInt(gets());
  if (X === 1) {
    alcool++;
  } else if (X ===  2      ) {
    gasolina++;
  } else if (X ===  3      ) {
    diesel++;
  }  
}

// Complete o código nos espaços em branco

print("MUITO OBRIGADO");
print("Alcool: " + alcool);
print("Gasolina: " + gasolina            );
print("Diesel: " +     diesel             );

// Complete o código nos espaços em branco