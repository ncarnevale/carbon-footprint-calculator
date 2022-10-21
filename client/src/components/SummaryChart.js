import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import {Doughnut} from 'react-chartjs-2';
import {Box} from '@mui/material';

ChartJS.register(ArcElement, Tooltip, Legend);

function getChartData (transportationTotal, energyTotal) {
    return {
        labels: ['Transportation', 'Energy',],
        datasets: [
            {
            data: [transportationTotal, energyTotal],
            backgroundColor: [
                '#33691e',
                '#80d6ff',
            ],
            borderWidth: 1,
            },
        ],
    };
}

function SummaryChart({transportationTotal, energyTotal}) {
    const chartData = getChartData(transportationTotal || 0, energyTotal || 0);

    return (
        <Box paddingX='15%'>
            <Doughnut data={chartData} /> 
        </Box>
    );
}
  
export default SummaryChart;
  