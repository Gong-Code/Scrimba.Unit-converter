/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const section = document.querySelector('section'); 
const input = document.querySelector('input');
const button = document.querySelector('button');
const lengthOut = document.querySelector('#length-out')
const volumeOut = document.querySelector('#volume-out')
const massOut = document.querySelector('#mass-out')



button.addEventListener('click', convertLength);
button.addEventListener('click', convertVolume);
button.addEventListener('click', convertMass);


function convertLength() {
    let meterToFeet = (input.value * 3.281).toFixed(3);
    let feetToMeter = (input.value / 3.281).toFixed(3);
    lengthOut.innerHTML = `<p>${feetToMeter} meters = ${meterToFeet} feet | ${meterToFeet} feet = ${feetToMeter} meters</p>`;
    console.log(meterToFeet + " feet");
    console.log(feetToMeter + " meters");
}

function convertVolume() {
    let literToGallon = (input.value * 0.264).toFixed(3);
    let gallonToLiter = (input.value / 0.264).toFixed(3);
    volumeOut.innerHTML = `<p>${literToGallon} gallons = ${gallonToLiter} liters | ${gallonToLiter} liters = ${literToGallon} gallons</p>`;
    console.log(literToGallon + " gallons");
    console.log(gallonToLiter + " liters");
}

function convertMass() {
    let kilogramToPound = (input.value * 2.204).toFixed(3);
    let poundToKilogram = (input.value / 2.204).toFixed(3);
    massOut.innerHTML = `<p>${kilogramToPound} pounds = ${poundToKilogram} kilograms | ${poundToKilogram} kilograms = ${kilogramToPound} pounds</p>`;
    console.log(kilogramToPound + " pounds");
    console.log(poundToKilogram + " kilograms");
}
