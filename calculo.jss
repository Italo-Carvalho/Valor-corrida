// 2+km*1.4+min*0.26 fórmula da conta
function formatamoeda(numero) {
  
  return numero.toFixed(2).replace(".",",")}
function calcular(){
   distanciakm=inputDistancia.value 
  min=inputTempo.value
  valorcorrida=2+distanciakm*1.4+min*0.26
 botaoCalcular.innerHTML="Total: R$"+ formatamoeda(valorcorrida)}