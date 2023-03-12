/*. PROBLEMA: La luna de Endor pierde temperatura día a día, para ello 
hay que hacer un monitoreo constante, Cree una función de flecha que 
permita calcular la temperatura media de la luna a partir de la 
temperatura máxima y mínima de cada día */

function calcularTemperaturaMedia(tem1,tem2){
    return (tem1+tem2)/2

}
let mediaTemperatura=calcularTemperaturaMedia(5,15)
console.log(mediaTemperatura)