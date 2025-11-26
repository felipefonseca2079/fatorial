       function fatorial(n) {
         if (n === 0) {
           return 1;
         }
       
         if (n < 0) { 
           return "Não é possível calcular o fatorial de um número negativo.";
         }
       
         let resultado = 1;
         for (let i = 1; i <= n; i++) {
           resultado *= i;
         }
         return resultado;
       }
       module.exports = {fatorial};