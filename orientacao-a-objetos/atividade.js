class ContaBancaria {
    constructor(agencia, numero, tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0; //sempre que tiver um getter e setter colocar um "_" na frente
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(valor) {
        this._saldo = valor;
    }

    sacar(valor){
        if (valor > this._saldo) {
            return "Operação negada. Saldo insuficiente"
        }
        this._saldo = this._saldo - valor;

        return this._saldo;
    }

    depositar(valor) {
        this._saldo += valor;
        return this._saldo; 
    }
}

class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero) //super está herdando os métodos da classe pai. Obs. precisa do "extends ClassePai"
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;

    }

    get cartaoCredito () {
        return this._cartaoCredito;
    }

    set cartaoCredito(valor) {
        this._cartaoCredito = valor;
    }
}

class ContaPoupanca extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero) 
        this.tipo = 'poupança';
    }
}

class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero) 
        this.tipo = 'universitária';
    }

    sacar(valor){
        if (valor > 500){
            return 'Limite de saque excedido';
        }

        this._saldo -= valor;

        return this._saldo;
    }
}