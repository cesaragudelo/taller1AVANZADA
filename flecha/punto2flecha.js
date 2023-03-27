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
let aliDieta=(codigos,claves)=>{
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
    
