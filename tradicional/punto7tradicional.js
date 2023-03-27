/*PROBLEMA: se necesita clasificar 10 números enteros positivos 
o negativos que contienen códigos de naves de guerra. Diseño 
un algoritmo que permita recibir dichos 10 números e indicar 
¿Cuál fue el más cercano a cero? (Si el número es negativo se 
debe mostrar el resultado del valor absoluto)
 */
/*
numeros=[-2,4,6,10,-8,-1,45,10,17]
negativos=[]

function encontrarMenor(numeros){
    let menor=numeros[0]
    if(menor<0){
        negativos.push(menor)
    }
    for (let index = 0; index < numeros.length; index++) {
        if(numeros[index]<menor){
            menor=numeros[index]
            if(menor<0){
                negativos.push(menor)
            }
        }     
    }
    console.log(negativos)
    
    if(negativos.length>0){
        let inicial=negativos[0]
        console.log(inicial)
        for (let i = 0; i < negativos.length; i++) {
            if(inicial > negativos[i]){
                menor=inicial
            }   
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
function encontrarMenor(numeros)
{
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
