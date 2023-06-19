var n = 8
function nomeMes(n) {
    var meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto",
        "Setembro", "Outubro", "Novembro", "Dezembro"]
    if (n < 1 || n > 12) {
        return "Erro: Número inválido. O número deve estar entre 1 e 12"
    } else {
        var i = n - 1
        return meses[i]
    }
}
var mes = nomeMes(n)
console.log(mes)