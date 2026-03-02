const temIngresso = false  ;
const censura = 16;
const idade = 18;
 

//  se a pessoa ter ingresso e idade maior de 16 anos  ;

if (temIngresso === true) {
    if (idade >= censura) {
        console.log(`Pode entrar`);    
    } else {
        console.log(`Barrada pela censura`);                
    }  
    
}else{
    console.log(`Barrada  por falte de ingresso`);
    
}