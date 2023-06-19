function pioresAlunos(e) {
    var melhorDesempenho = {
      nome: "",
      media: -Infinity
    };
  
    for (var a in e) {
      var notas = e[a];
      var somaNotas = notas.reduce(function(b, c) {
        return b + c;
      }, 0);
      var media = somaNotas / notas.length;
  
      if (media > melhorDesempenho.media) {
        melhorDesempenho.nome = a;
        melhorDesempenho.media = media;
      }
    }
  
    return melhorDesempenho;
  }
  var a = {
    Kauã: [9, 8, 7, 8],
    Laura: [10, 10, 10, 10],
    Jaum: [8, 8, 8, 8]
  };
  
  var resultado = pioresAlunos(a);
  console.log(resultado); 