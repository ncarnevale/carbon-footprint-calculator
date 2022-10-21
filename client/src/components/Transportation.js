import {useState} from 'react';
import {Button, Typography, Input} from '@mui/material';
import Radio from './Radio';

function Transportation({onUpdateTotal}) {
  const [ownsCarValue, setOwnsCarValue] = useState(null);
  const [carMilesValue, setCarMilesValue] = useState('');
  const [mpgValue, setMpgValue] = useState('');
  const [flightMilesValue, setFlightMilesValue] = useState('');
  
  const handleSubmit = async () => {
    const url = `/api/transportation?mpg=${mpgValue}&carMiles=${carMilesValue}&flightMiles=${flightMilesValue}`;
    const response = await fetch(url);
    try {
      const {carbonTotal} = await response.json();
      onUpdateTotal(carbonTotal);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Typography variant='body1'>
        <p>
          Do you own a car?
          <Radio name={'car-radio'} id={'car-radio-yes'} value='Yes' checked={ownsCarValue === 'Yes'} onCheck={value => setOwnsCarValue(value)} />
          <Radio name={'car-radio'} id={'car-radio-no'} value='No' checked={ownsCarValue === 'No'} onCheck={value => setOwnsCarValue(value)} />
        </p>
        {ownsCarValue === 'Yes' && <div>
          <p>
            What's your car's mpg? 
            <Input type='number' sx={{width: '70px', marginLeft: '20px'}} value={mpgValue} onChange={e => setMpgValue(e.currentTarget.value)}/>
          </p>
          <p>
            How many miles do you drive each year? 
            <Input type='number' sx={{width: '70px', marginLeft: '20px'}} value={carMilesValue} onChange={e => setCarMilesValue(e.currentTarget.value)}/>
          </p>
        </div>}
        <p>
          How many total miles do you fly each year?
          <Input type='number' sx={{width: '70px', marginLeft: '20px'}} value={flightMilesValue} onChange={e => setFlightMilesValue(e.currentTarget.value)}/>
        </p>
        <Typography variant='inherit' sx={{display: 'flex', justifyContent: 'flex-end'}}>
          <Button onClick={handleSubmit} variant='contained'>Submit</Button>
        </Typography>
    </Typography>
  );
}


export default Transportation;
