function filtro(a) {
    var n = a.filter(function(e) {
      return typeof e === 'number';
    });
  
    return n;
  }
  var a1 = ["o", 1, "kauã", 6, 1, 5, "lindão"];
  var n1 = filtro(a1);
  console.log(n1); 
  
  var a2 = ["kauã", "lindão"];
  var n2 = filtro(a2);
  console.log(n2); 