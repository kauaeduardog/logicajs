function semOperador(num1, num2) {
    if (num1 < 0 || num2 < 0) {
        return "Os números devem ser não negativos.";
    }

    var resultado = 0;
    for (var i = 0; i < num2; i++) {
        resultado += num1;
    }

    return resultado;
}
var num1 = 16;
var num2 = 15;
var resultado = semOperador(num1, num2);
console.log(resultado);