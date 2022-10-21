const {FLIGHT_EMISSIONS_PER_MILE, AUTO_EMISSIONS_PER_GALLON} = require('./constants');

// Returns annual transportation emissions in lbs CO2
// mpg - average miles per gallon of car driven
// carMiles - annual miles driven in car
// flightMiles - annual miles of flights taken
function getTransportationCarbon({
    mpg: mpgStr,
    carMiles: carMilesStr,
    flightMiles: flightMilesStr
}) {
    const mpg = !!mpgStr ? parseInt(mpgStr, 10) : 0;
    const carMiles = !!carMilesStr ? parseInt(carMilesStr, 10) : 0;
    const flightMiles = !!flightMilesStr ? parseInt(flightMilesStr, 10) : 0;

    const autoTotal = mpg ? (carMiles / mpg) * AUTO_EMISSIONS_PER_GALLON : 0;
    const flightTotal = flightMiles * FLIGHT_EMISSIONS_PER_MILE;
    
    const carbonTotal = Math.round(autoTotal + flightTotal);

    return {carbonTotal};
}

module.exports = {getTransportationCarbon};