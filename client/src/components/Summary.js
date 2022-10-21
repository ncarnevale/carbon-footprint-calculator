import {Typography, Box} from '@mui/material';
import SummaryChart from './SummaryChart';

function Summary({transportationTotal, energyTotal}) {
    const Units = () => <span>lb CO<sub>2</sub></span>
    return (
      <Box padding='20px' textAlign='center'>
        <Typography variant='h3' borderBottom='1px solid' marginBottom='20px'>Summary</Typography>
        <Typography variant='body1' textAlign='left'>
          <Box display='flex' justifyContent='space-between'>
            <div>Transportation:</div>
            <div>{transportationTotal.toLocaleString('en', {useGrouping:true})} <Units /></div>
          </Box>
          <Box display='flex' justifyContent='space-between'>
            <div>Energy:</div>
            <div>{energyTotal.toLocaleString('en', {useGrouping:true})} <Units /></div>
          </Box>
            <Typography variant='h6' fontWeight='bold'>
              <Box display='flex' marginTop='10px' borderTop='1px dashed' paddingTop='10px' justifyContent='space-between'>
                  <div>Net Annual Emissions:</div>
                  <div>{(energyTotal + transportationTotal).toLocaleString('en', {useGrouping:true})} <Units /></div>
              </Box>
            </Typography>
        </Typography>
        <Box padding='20px'>
          <SummaryChart transportationTotal={transportationTotal} energyTotal={energyTotal} />
        </Box>
      </Box>
    );
  }
  
  export default Summary;
  