function generarTabla(){
  var num;num=prompt('Ingresa un numero(1-10)','');
  num=parseInt(num);
  document.write("<table border='3'>");
  var x=1;
  for (x=1; x<=10; x++){
    tabla=num*x;
    document.write("<tr><td>" + num + " x " + x + " = " + tabla + "</td></tr>");
  }
  document.write("</table>");
}
