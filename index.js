// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2);
}
const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2);
}
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];
const selectDifferentDrivers = function(arrayOfDrivers, selectingDrivers){
    return selectingDrivers(arrayOfDrivers);
}

const nameOfDrivers=['Antonia', 'Nuru', 'Amari', 'Mo'];
const firstTwoDriver = selectDifferentDrivers(nameOfDrivers, returnFirstTwoDrivers);
const lastTwoDrivers = selectDifferentDrivers(nameOfDrivers,returnLastTwoDrivers);

const createFareMultiplier = function(fareMultiplier){
    return function(value){
        return value * fareMultiplier;
    } 
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

