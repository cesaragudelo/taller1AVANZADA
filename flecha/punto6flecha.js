

  let edades=()=>{
    let edades=[]
    for (let index = 0; index < 20; index++) {
        edades[index] = Math.floor(Math.random() * 50);
    }
    return edades
  }

  let edadMayor=(edades)=>{
    let mayor=0;
    let iguales=0;
    for (let index = 0; index < 20; index++){
       
        if(edades[index]>mayor){
            mayor=edades[index];
        }
    }
    for (let i = 0; i < 20; i++){
      if(edades[i]==mayor){
        iguales=iguales+1
      }
    }
    return (console.log(edades+" "+" ---el numero mayor es: "+mayor+" las veces que se repite es: "+iguales))
  }
  console.log(edadMayor(edades()))
  