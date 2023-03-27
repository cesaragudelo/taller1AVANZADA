/* numeros=[-2,4,6,10,8,12,45,10,17]

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
encontrarMenor(numeros)*/


numeros=[-2,4,6,10,-8,-1,45,10,17]
let encontrarMenor=(numeros)=>{
    if (numeros.length === 0) return 0;
    
    let inicial = numeros[0];

    for(let i = 0; i < numeros.length;i++){
        let number = numeros[i];
        let absNumber =  Math.abs(number);
        let absinicial = Math.abs(inicial);

        if (absNumber < absinicial) 
        {
            inicial = number;
        } 
        else if (absNumber === absinicial && inicial < 0) 
        {
            inicial = number;
        }
    }
    
    if(inicial<0){
        let abs=Math.abs(inicial)
        console.log("el numero mas cercano a cero es: "+inicial+" el valor absoluto es: "+abs)
    }else{
        console.log("el numero mas cercano a cero es: "+inicial)
    }
    
    //return inicial;
}
encontrarMenor(numeros)
