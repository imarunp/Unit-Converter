let inputEl= document.getElementById("data-ent");
let btn_inp= document.getElementById("convert");
let length_p= document.getElementById("length")
let volume_p=document.getElementById("volume")
let mass_p=document.getElementById("mass")

let meterToFeet=3.281;
let literToGallon=0.264;
let kgToPound= 2.204;

btn_inp.addEventListener("click",function(){
    let baseValue=inputEl.value
    length_p.textContent=`${baseValue} meters = ${(baseValue*meterToFeet).toFixed(3)} feet | ${baseValue} feet = ${(baseValue/meterToFeet).toFixed(3)} meters`
    volume_p.textContent=`${baseValue} liters = ${(baseValue*literToGallon).toFixed(3)} gallons | ${baseValue} gallons = ${(baseValue/literToGallon).toFixed(3)} liters`
    mass_p.textContent=`${baseValue} kilos = ${(baseValue*kgToPound).toFixed(3)} pounds | ${baseValue} pounds = ${(baseValue/kgToPound).toFixed(3)} kilos`
})