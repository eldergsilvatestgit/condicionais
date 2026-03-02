const temIngresso = true;
const censura = 16;
const idade = 14;
const estaComosPais= false;

// tem ingresso E
//tem idade mairo ou igual a censura OU está com os pais.

if (temIngresso) {
    if (idade>= censura || estaComosPais === true ) {
        console.log(`Pode entrar`);        
    }else{
        console.log(`Pode Entrar `);
        
    }

}else{
    console.log(`Barrada.`);
    
}