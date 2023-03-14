//para llenar alimentos
let alimentos = []

for(let i=1;i<=300;i++){
    //para crear verduras
    if(i<=100){
        // tipos alimentos 
        let tiposDeAlimentos =["guayaba"," maracuyá", "banano", "pera", "naranja"," mango", "sandia", "manzana", "granadilla", "pera"," mandarina"]
        let alimento = Math.floor(Math.random()*tiposDeAlimentos.length);

        //nivel de energia
        let min = 100;
        let max = 500;
        let nivelEnergía =Math.floor((Math.random()*(max-min +1))
        +min);

        alimentos.push({nombre:tiposDeAlimentos[alimento],tipo:"vegetal",energia:nivelEnergía})
    }
   
}
//let posicion =-1
///fun principal
let aliDeDieta=(alimentos,callback)=>{
    setTimeout(function(){
        let vegetalesDieta = alimentos.filter(function(alimento){
            return alimento.tipo=='vegetal' && alimento.energia>200
        })
        callback(vegetalesDieta)
    },2000)

}
//llamando funcion
let sumaDeEnergia=0;
aliDeDieta(alimentos,function(vegetalesDieta){
    console.log(vegetalesDieta)

    for(let i=0;i<vegetalesDieta.length;i++){
        sumaDeEnergia=sumaDeEnergia+vegetalesDieta[i].energia
    }
    console.log(`la sumatoria final es ${sumaDeEnergia}`)
    
})