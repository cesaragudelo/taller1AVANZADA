/*.PROBLEMA: Obi-Wan Kenobi, necesita clasificar diferentes códigos de 
acceso a las naves de guerra los cuáles reposan en la base de datos 
central, para ello debe programar una función que permita recibir la 
palabra clave de cada nave y separar imprimiendo solo el nombre del 
piloto asignado a cada nave. 
Tenga en cuenta que el formato de todos los datos es el siguiente:
• ARQ2555: Sara Bel-Sun
• ARQ2556: Nodin Chavdri
• ARQ2557: Finn
*/ 
/*function encontrarPilotoAsignado(codigosAcceso,palabraClave){
    return codigosAcceso.map(function(codigoAcceso){
       console.log(codigoAcceso.split(''))
    });*/
    

let codigosAcceso=["ARQ2555: Sara Bel-Sun", "ARQ2556: Nodin Chavdri","ARQ2557: Finn"]
console.log(codigosAcceso.split('',5))




