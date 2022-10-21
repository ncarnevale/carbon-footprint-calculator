const {getEnergyCarbon} = require('./getEnergyCarbon');
const {NATURAL_GAS_EMISSIONS_PER_THOUSAND_CUBIC_FOOT, ELECTRIC_EMISSIONS_PER_KWH} = require('./constants');

describe('getEnergyCarbon', () => {
    it('returns 0 with no inputs', () => {
        const {energyTotal} = getEnergyCarbon({});
        expect(energyTotal).toEqual(0);
    });

    it('calculates annual natural gas emissions', () => {
        const {energyTotal} = getEnergyCarbon({
            gasCubicFeet: '5000',
        });
        expect(energyTotal).toEqual(Math.round(12 * 5 * NATURAL_GAS_EMISSIONS_PER_THOUSAND_CUBIC_FOOT));
    });

    it('calculates annual electric emissions', () => {
        const {energyTotal} = getEnergyCarbon({
            electricKwh: '1000',
        });
        expect(energyTotal).toEqual(Math.round(12 * 1000 * ELECTRIC_EMISSIONS_PER_KWH));
    });

    it('factors in electric percentage', () => {
        const {energyTotal} = getEnergyCarbon({
            electricKwh: '1000',
            electricPercentGreen: '35'
        });
        expect(energyTotal).toEqual(Math.round(12 * 650 * ELECTRIC_EMISSIONS_PER_KWH));
    });

    it('calculates total emissions', () => {
        const {energyTotal} = getEnergyCarbon({
            gasCubicFeet: '5000',
            electricKwh: '1000',
            electricPercentGreen: '35'
        });
        const sum = (12 * 5 * NATURAL_GAS_EMISSIONS_PER_THOUSAND_CUBIC_FOOT + 12 * 650 * ELECTRIC_EMISSIONS_PER_KWH);
        expect(energyTotal).toEqual(Math.round(sum));
    });
})