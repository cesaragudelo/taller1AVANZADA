/*function encontrarEnergiaNegativaSables(energiaSable){
    let sumaDeEnergiaNegativa=0
    energiaSable.forEach(function(energia){
       if(energia< 0){
        sumaDeEnergiaNegativa=sumaDeEnergiaNegativa+1
       }
      
    })
    return sumaDeEnergiaNegativa
    
}
let energiaSables=[2,-4,-8,5,-6]
console.log(encontrarEnergiaNegativaSables(energiaSables))*/

let encontrarEnergiaNegativaSables=(energiaSable)=>{
    let sumaDeEnergiaNegativa=0
    energiaSable.forEach(function(energia){
       if(energia< 0){
        sumaDeEnergiaNegativa=sumaDeEnergiaNegativa+1
       }
      
    })
    return sumaDeEnergiaNegativa
}
let energiaSables=[2,-4,-8,5,-6]
console.log(energiaSables+" sables con energia negativa: "+encontrarEnergiaNegativaSables(energiaSables))