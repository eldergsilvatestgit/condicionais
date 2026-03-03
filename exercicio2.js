const valorDaCompra = 100;
const numeroDeparcelas = 0;

if (numeroDeparcelas ===1) {
     // a vista comn 10% de desconto
     const desconto = valorDaCompra * 0.10
     const valorAPagar = valorDaCompra-desconto
     console.log(`Voçê deve pagar R$${valorAPagar}, pois valor a vista  tem 10%  de desconto`);
   
}else if (numeroDeparcelas >=2 && numeroDeparcelas <=6){
// parcelado
const valorDaParcela = valorDaCompra/ numeroDeparcelas
console.log(`Voçê deve pagar em   ${numeroDeparcelas} x sem juros de R$ ${valorDaParcela.toFixed(2)} `);

}else if (numeroDeparcelas >=7 && numeroDeparcelas <=12 ){
    // parcelado com juros
    const valorAPagarComJuros =valorDaCompra * ( 1+1/100)** numeroDeparcelas;
    const valorDaParcela=(valorAPagarComJuros/numeroDeparcelas).toFixed(2);
    console.log(`Voçê deve pagar em ${numeroDeparcelas} x de R$${valorDaParcela} totalizando ${valorAPagarComJuros.toFixed(2)}, devido a incidencia de juros  `);
    

}else{
    console.log(`numero de parcelas inválidos `);
    
}
