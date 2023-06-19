function calcularSoma(a) {
    var num = 0;
    
    for (var i = 0; i < a.length; i++) {
      num += a[i];
    }
    
    return num;
  }
  var n1 = [16, 2, 18, 4, 15];
  var num1 = calcularSoma(n1);
  console.log(num1); 