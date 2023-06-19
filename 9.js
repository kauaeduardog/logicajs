function segundoMaior(array) {
    if (array.length < 2) {
      return "Precisa de minimo dois numeros";
    }
    
    var max1 = -Infinity;
    var max2 = -Infinity;
    
    for (var i = 0; i < array.length; i++) {
      if (array[i] > max1) {
        max2 = max1;
        max1 = array[i];
      } else if (array[i] > max2 && array[i] < max1) {
        max2 = array[i];
      }
    }
    
    if (max2 === -Infinity) {
      return "Nao existe o segundo maior valor";
    } else {
      return max2;
    }
  }
  var n1 = [15, 14, 13, 17, 16];
  var segMaior1 = segundoMaior(n1);
  console.log(segMaior1); 