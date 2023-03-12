/*PROBLEMA: QUI-GON JINN está encargado de revisar n sables 
de luz y contabilizar la cantidad de energía de sables que tienen 
negativa en Joules.
Ejemplo: para la entrada {2,4,-8,5,-6} la cantidad de sables 
defectuosos con energía negativa fue de 2 sables. */




function encontrarEnergiaNegativaSables(energiaSable){
    let sumaDeEnergiaNegativa=0
    energiaSable.forEach(function(energia){
       if(energia< 0){
        sumaDeEnergiaNegativa=sumaDeEnergiaNegativa+1
       }
      
    })
    return sumaDeEnergiaNegativa
    
}
let energiaSables=[2,-4,-8,5,-6]
console.log(encontrarEnergiaNegativaSables(energiaSables))