 var campoVisor = document.getElementById('resultado');

 function calcular(tipo, valor) {

     if (tipo === 'acao') {
         if (valor === 'c') {
             campoVisor.value = '';
         }
         if (valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.') {
             campoVisor.value += valor;
         }
         if (valor === '=') {
             campoVisor.value = eval(campoVisor.value)
         }
     } else if (tipo === 'valor') {
         campoVisor.value += valor;

     }
 }