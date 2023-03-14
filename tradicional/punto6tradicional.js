/*PROBLEMA: Para habilitar la guerra de los clones es necesario 
clasificar la edad de estos, elabore un programa que permita 
recibir 20 edades y 20 códigos diferentes generadas 
aleatoriamente y determine cual de esas edades es la mayor. Si 
se repite la misma edad se debe contar el número de 
repeticiones */
/*
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  console.log(getRandomInt(3));
  // Expected output: 0, 1 or 2
  
  console.log(getRandomInt(1));
  // Expected output: 0
  
  console.log(Math.random());
  // Expected output: a number from 0 to <1
  */

  
  
  function edades(){
    let edades=[]
    for (let index = 0; index < 20; index++) {
        edades[index] = Math.floor(Math.random() * 50);
    }
    return edades
  }
  
  function edadMayor(edades){
    let mayor=0;
    let iguales=1;
    for (let index = 0; index < 20; index++){
        if(edades[index]== mayor){
            iguales=iguales+1;
        }
        if(edades[index]>mayor){
            mayor=edades[index];
        }
    }
    return (console.log(edades+" "+" ---el numero mayor es: "+mayor+" las veces que se repite es: "+iguales))
  }
  console.log(edadMayor(edades()))


/*
  for (let index = 0; index < 20; index++) {
    edades[index] = Math.floor(Math.random() * 50);
    if(edades[index]== mayor){
        iguales=iguales+1;
    }
    if(edades[index]>mayor){
        mayor=edades[index];
    }
    
  }
  console.log(edades)
  console.log("las veces que se repite el mayor: "+iguales)
  console.log("el mayor es: "+mayor)*/