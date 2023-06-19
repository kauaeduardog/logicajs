function repetir(e, q) {
    var resultado = [];
    
    for (var i = 0; i < q; i++) {
      resultado.push(e);
    }
    
    return resultado;
  }
  var repeticoes1 = repetir("kauã lindo", 2);
  console.log(repeticoes1); 
  
  var repeticoes2 = repetir(6, 3);
  console.log(repeticoes2); 