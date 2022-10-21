const {NATURAL_GAS_EMISSIONS_PER_THOUSAND_CUBIC_FOOT, ELECTRIC_EMISSIONS_PER_KWH} = require('./constants');

// Returns annual home energy emissions in lbs CO2
// gasCubicFeet - monthly natural gas usage in cubic feet
// electricKwh - monthly electric usage in kwH
// electricPercentGreen - percent of electricity service provided is green energy
function getEnergyCarbon({
    gasCubicFeet: gasCubicFeetStr,
    electricKwh: electricKwhStr,
    electricPercentGreen: electricPercentGreenStr
}) {
    const gasCubicFeet = !!gasCubicFeetStr ? parseInt(gasCubicFeetStr, 10) : 0;
    const electricKwh = !!electricKwhStr ? parseInt(electricKwhStr, 10) : 0;
    const electricPercentGreen = !!electricPercentGreenStr ? parseInt(electricPercentGreenStr, 10) : 0;

    const gasTotalMonthly = gasCubicFeet * NATURAL_GAS_EMISSIONS_PER_THOUSAND_CUBIC_FOOT / 1000;

    const electricTotalMonthly = electricKwh * ELECTRIC_EMISSIONS_PER_KWH * (1 - (electricPercentGreen / 100));
    

    const energyTotal = Math.round((gasTotalMonthly + electricTotalMonthly) * 12);

    return {energyTotal};
}

module.exports = {getEnergyCarbon};