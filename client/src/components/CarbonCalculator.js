import {useState} from 'react';
import Transportation from './Transportation';
import Energy from './Energy';
import Summary from './Summary';
import CategoryCard from './CategoryCard';
import { Box } from '@mui/material';



function CarbonCalculator() {
    const [transportationTotal, setTransportationTotal] = useState(0);
    const [energyTotal, setEnergyTotal] = useState(0);

    return (
        <Box display='flex' border='3px solid' borderRadius='8px' padding='20px' margin='20px' textAlign='left' color="common.black" bgcolor='background.light'>
            <Box flex='2 1 0'>
                <CategoryCard step={1} title={'Transportation'}>
                    <Transportation onUpdateTotal={total => setTransportationTotal(total)} />
                </CategoryCard>
                <CategoryCard step={2} title={'Energy'}>
                    <Energy onUpdateTotal={total => setEnergyTotal(total)} />
                </CategoryCard>
            </Box>
            <Box flex='1 1 0' minWidth={0}>
                <Summary transportationTotal={transportationTotal} energyTotal={energyTotal} />
            </Box>
        </Box>
    );
}

export default CarbonCalculator;
