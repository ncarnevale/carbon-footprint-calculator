import {useState} from 'react';
import {Button, Typography, Input} from '@mui/material';
import Radio from './Radio';

function Energy({onUpdateTotal}) {
  const [hasNaturalGasValue, setHasNaturalGasValue] = useState(null);
  const [gasCubicFeetValue, setGasCubicFeetValue] = useState('');
  const [electricValue, setElectricValue] = useState('');
  const [electricPercentageValue, setElectricPercentageValue] = useState('');

  const handleSubmit = async () => {
    const url = `/api/energy?gasCubicFeet=${gasCubicFeetValue}&electricKwh=${electricValue}&electricPercentGreen=${electricPercentageValue}`;
    const response = await fetch(url);
    try {
      const {energyTotal} = await response.json();
      onUpdateTotal(energyTotal);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Typography variant='body1'>
        <p>
          Does your home use natural gas?
          <Radio name={'natural-gas-radio'} id={'natural-gas-radio-yes'} value='Yes' checked={hasNaturalGasValue === 'Yes'} onCheck={value => setHasNaturalGasValue(value)} />
          <Radio name={'natural-gas-radio'} id={'natural-gas-radio-no'} value='No' checked={hasNaturalGasValue === 'No'} onCheck={value => setHasNaturalGasValue(value)} />
        </p>
        {hasNaturalGasValue === 'Yes' && <div>
          <p>
            What's your average monthly gas usage, in cubic feet? 
            <Input type='number' sx={{width: '70px', marginLeft: '20px'}} value={gasCubicFeetValue} onChange={e => setGasCubicFeetValue(e.currentTarget.value)}/>
          </p>
        </div>}
        <p>
          What's your average monthly kwH usage, according to your electric bill?
          <Input type='number' sx={{width: '70px', marginLeft: '20px'}} value={electricValue} onChange={e => setElectricValue(e.currentTarget.value)}/>
        </p>
        <p>
          What percentage of your electric service provider is green energy?
          <Input type='number' sx={{width: '70px', marginLeft: '20px'}} value={electricPercentageValue} onChange={e => setElectricPercentageValue(e.currentTarget.value)}/> %
        </p>
        <Typography variant='inherit' sx={{display: 'flex', justifyContent: 'flex-end'}}>
          <Button variant='contained' onClick={handleSubmit}>Submit</Button>
        </Typography>
    </Typography>
  );
}

export default Energy;
