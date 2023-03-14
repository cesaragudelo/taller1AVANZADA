numeros=[-2,4,6,10,8,12,45,10,17]

let encontrarMenor=(numeros)=>{
    let menor=numeros[0]
    for (let index = 0; index < numeros.length; index++) {
        if(numeros[index]<menor){
            menor=numeros[index]
        }
        
    }
    console.log("el numero menor es: "+menor)
    if(menor<0){
      vAbsoluto= Math.abs(menor)
      console.log("el valor absoluto de "+menor+" es: "+vAbsoluto)
    }
    
}
encontrarMenor(numeros)
