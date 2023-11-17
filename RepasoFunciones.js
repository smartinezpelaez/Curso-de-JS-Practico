let userName = "Smartinez"
function nombreCompleto(name, lastName){
    return name + ' ' + lastName; 
}
console.log (nombreCompleto('steven', 'martinez' ));
console.log('*******************************')

function saludo(name, lastName, userName){
     let completeName = nombreCompleto(name, lastName);
     console.log(`Mi nombres es ${completeName}, pero prefiero que me digas ${userName}. `);
}
saludo('steven', 'martinez', 'smartinez');