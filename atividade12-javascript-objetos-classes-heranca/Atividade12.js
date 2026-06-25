function Retangulo (altura, base){
    this.altura = altura;
    this.base = base;

    this.calcularArea = function(){
        return this.altura * this.base
    }
}

function areaRetangulo (){
    let altura = Number(document.getElementById("idAltura").value);
    let base = Number(document.getElementById("idBase").value);

    let objRet = new Retangulo (altura, base);

    alert(`Altura: ${objRet.altura}\nBase: ${objRet.base}\nÁrea do Retângulo: ${objRet.calcularArea()}`);

}

