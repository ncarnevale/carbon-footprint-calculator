const {getTransportationCarbon} = require('./getTransportationCarbon');
const {FLIGHT_EMISSIONS_PER_MILE, AUTO_EMISSIONS_PER_GALLON} = require('./constants');

describe('getTransportationCarbon', () => {
    it('returns 0 with no inputs', () => {
        const {carbonTotal} = getTransportationCarbon({});
        expect(carbonTotal).toEqual(0);
    });

    it('calculates car emissions', () => {
        const {carbonTotal} = getTransportationCarbon({
            mpg: '30',
            carMiles: '3000'
        });
        expect(carbonTotal).toEqual(Math.round(100 * AUTO_EMISSIONS_PER_GALLON));
    });

    it('calculates flight emissions', () => {
        const {carbonTotal} = getTransportationCarbon({
            flightMiles: '1000',
        });
        expect(carbonTotal).toEqual(Math.round(1000 * FLIGHT_EMISSIONS_PER_MILE));
    });

    it('calculates total emissions', () => {
        const {carbonTotal} = getTransportationCarbon({
            mpg: '30',
            carMiles: '3000',
            flightMiles: '1000',
        });
        const sum = 100 * AUTO_EMISSIONS_PER_GALLON + 1000 * FLIGHT_EMISSIONS_PER_MILE
        expect(carbonTotal).toEqual(Math.round(sum));
    });
})