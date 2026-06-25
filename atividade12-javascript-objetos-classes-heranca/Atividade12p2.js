class Conta {
    constructor(){
        this._nome;
        this._banco;
        this._conta;
        this._saldo;
    }

    setNome(value){
        this._nome = value;
    }

    getNome(){
        return (this._nome);
    }

    setBanco(value){
        this._banco = value;
    }

    getBanco (){
        return (this._banco);
    }

    setConta(value){
        this._conta = value;
    }
    
    getConta(){
        return(this._conta);
    }

    setSaldo (value){
        this._saldo = value;
    }

    getSaldo (){
        return (this._saldo);
    }
}

class Corrente extends Conta {
    constructor(){
        super();
        this._saldoEspecial;
    }

    setSaldoEsp(value){
        this._saldoEspecial = value;
    }

    getSaldoEsp(){
        return(this._saldoEspecial);
    }
}

class Poupanca extends Conta {
    constructor(){
        super();
        this._juros;
        this._dataVenc;
    }

    setJuros(value){
        this._juros = value;
    }

    getJuros(){
        return (this._juros);
    }

    setDataVenc(value){
        this._dataVenc = value;
    }

    getDataVenc (){
        return (this._dataVenc);
    }
}

var objCorrente = new Corrente();
objCorrente.setNome(prompt("Nome do correntista da Conta Corrente: "));
objCorrente.setBanco(prompt("Banco: "));
objCorrente.setConta(prompt("Número da conta: "));
objCorrente.setSaldo(prompt("Digite seu saldo atual: "));
objCorrente.setSaldoEsp(prompt("Digite o saldo especial da conta: "));

var objPoupanca = new Poupanca();
objPoupanca.setNome(prompt("Nome do correntista da Poupança: "));
objPoupanca.setBanco(prompt("Banco: "));
objPoupanca.setConta(prompt("Número da conta: "));
objPoupanca.setSaldo(prompt("Digite seu saldo atual: "));
objPoupanca.setJuros(prompt("Digite a taxa de juros da poupança: "));
objPoupanca.setDataVenc(prompt("Digite a data de vencimento: "));

alert(`CONTA CORRENTE\n\nNome do correntista: ${objCorrente.getNome()}\nBanco: ${objCorrente.getBanco()}\nNúmero da conta: ${objCorrente.getConta()}\nSaldo Atual: R$${objCorrente.getSaldo()}\nSaldo Especial: R$${objCorrente.getSaldoEsp()}`);

alert(`CONTA POUPANÇA\n\nNome do correntista: ${objPoupanca.getNome()}\nBanco: ${objPoupanca.getBanco()}\nNúmero da conta: ${objPoupanca.getConta()}\nSaldo Atual: R$${objPoupanca.getSaldo()}\nJuros: ${objPoupanca.getJuros()}\nData de vencimento: ${objPoupanca.getDataVenc()}`);



