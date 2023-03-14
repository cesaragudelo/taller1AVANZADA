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
    
/*
let codigosAcceso=["ARQ2555: Sara Bel-Sun", "ARQ2556: Nodin Chavdri","ARQ2557: Finn"]
console.log(codigosAcceso.split('',5))
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}*/
/*
let codigosNave=[
"ARQ2555",
"ARQ2556",
"ARQ2557",
"ARQ2558",
"ARQ2559",
"ARQ2560",
"ARQ2561"]

let codigos=[
    "ARQ2555: flavio nelson",
    "ARQ2556: gato viejo",
    "ARQ2557: carlos fernando",
    "ARQ2558: ovidio alfonso",
    "ARQ2559: diego castaño",
    "ARQ2560: mauricio ramirez",
    "ARQ2561: Sara Bel-Sun"
]


 
function aliDieta(codigos,codigo){
    for (let index = 0; index < codigos.length; index++) {
      let prueba= codigos[index].toString().split(":")
      if(prueba[0]==codigo){
        return console.log(prueba[1])
      }     
    }
    }
    aliDieta(codigos,"ARQ2557")*/

    let codigos=[
      "ARQ2555:flavio nelson",
      "ARQ2556:gato viejo",
      "ARQ2557:carlos fernando",
      "ARQ2558:ovidio alfonso",
      "ARQ2559:diego castaño",
      "ARQ2560:mauricio ramirez",
      "ARQ2561:Sara Bel-Sun"
  ]
  
  let claves=[
      "ARQ2558",
      "ARQ2559",
      "ARQ2560",
      "ARQ2555"
  ]
  
  ///funcion principal
  ///funcion principal
   let codigosBD=[]
  function aliDieta(codigos,claves){
          ///sacar claves de la base de datos
          for(let i=0;i<codigos.length;i++){
               let clave =codigos[i].toString().split(":")
              codigosBD.push(clave[0])
          }
        
          for(let i=0;i<=claves.length;i++){
              let prueba3 = codigosBD.filter(function(codigo){
                  //console.log(codigo)
                  
                 let posicion =-1
                 if  (codigo==claves[i]){
                      codigos.filter(function(){
                      posicion =posicion+1
                      let posiciondelobjeto=posicion
  
                      let nombres=codigos[posiciondelobjeto].split(codigo+":")[1]
                      if(nombres)
                      console.log(codigos[posiciondelobjeto].split(codigo+":")[1])
  
  
                  })
                  
   
                 }   
           
      })
  
          }
     
  
          }
         
      aliDieta(codigos,claves)
      


