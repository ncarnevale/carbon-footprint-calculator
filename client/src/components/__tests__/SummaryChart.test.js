import { render } from '@testing-library/react';
import SummaryChart from '../SummaryChart';

const mockDoughnutChart = jest.fn();
jest.mock('react-chartjs-2', () => ({
    Doughnut: props => {
        mockDoughnutChart(props);
        return <div></div>;
    }
}));

describe('CarbonCalculator', () => {
    beforeEach(() => {
        mockDoughnutChart.mockClear();
    });
    it ('renders dougnut chart', () => {
        render(<SummaryChart />);
        expect(mockDoughnutChart).toHaveBeenCalled();
    });

    it ('defaults chart data to 0', () => {
        render(<SummaryChart />);
        const {data: chartData} = mockDoughnutChart.mock.calls[0][0];
        const data = chartData?.datasets[0].data;
        expect(data.length).toBeGreaterThan(0);
        data.forEach(n => expect(n).toBe(0));
    });

    it ('sets chart data to totals', () => {
        render(<SummaryChart transportationTotal={10} energyTotal={20} />);
        const {data: chartData} = mockDoughnutChart.mock.calls[0][0];
        const data = chartData?.datasets[0].data;
        expect(data.length).toBeGreaterThan(0);
        expect(data).toContain(10);
        expect(data).toContain(20);
    });
});
