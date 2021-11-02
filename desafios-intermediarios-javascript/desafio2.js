let salario = gets();

function calcularImposto(valor) {

  let imposto = 0;
  let montante;
  let salario = valor;

    if (salario > 4500.00) {
      montante = salario - 4500.00;
      imposto = (montante * 0.28) + 350;
    } else if (salario > 3000.00) {
      montante = salario - 3000.00;
      imposto += (montante * 0.18) + 80;
    } else if (salario > 2000.00) {
      montante =  salario - 2000.00;
      imposto += montante * 0.08;  //insira seu código nos espaços em branco
    }
    
    return imposto;

}

let resultado = calcularImposto(salario);

print((resultado === 0)? "Isento" : "R$ "+resultado.toFixed(2));