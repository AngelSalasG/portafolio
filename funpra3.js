function generarRFC() {
  const nombre = document.getElementById('nombre').value.toUpperCase();
  const apellidoPaterno = document.getElementById('apellidoPaterno').value.toUpperCase();
  const apellidoMaterno = document.getElementById('apellidoMaterno').value.toUpperCase();
  const dia = document.getElementById('dia').value.padStart(2, '0');
  const mes = document.getElementById('mes').value.padStart(2, '0');
  const anio = document.getElementById('anio').value.slice(-2);

  const rfc = apellidoPaterno.slice(0, 2) + apellidoMaterno.slice(0, 1) + nombre.slice(0, 1) + anio + mes + dia;

  document.getElementById('resultado').value = rfc;
}
