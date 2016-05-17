function fatorial() {
    test = document.getElementById('number').value;
    var i = 1;
    var fat = 1;
    while( i <= test ){
      fat = fat * i;
      i += 1;
    }
    document.getElementById('res').value = fat;
}
 
