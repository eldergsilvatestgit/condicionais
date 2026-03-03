const valorDaCompra = 100;
const numeroDeparcelas = 3;

if (numeroDeparcelas ===1) {
     // a vista comn 10% de desconto
     const desconto = valorDaCompra * 0.10
     const valorAPagar = valorDaCompra-desconto
     console.log(`Voçê deve pagar R$${valorAPagar}, pois valor a vista  tem 10%  de desconto`);
   
}else{
// parcelado
const valorDaParcela = valorDaCompra/ numeroDeparcelas
console.log(`Voçê deve pagar ${numeroDeparcelas} parcelas de R$ ${valorDaParcela.toFixed(2)} `);


}
