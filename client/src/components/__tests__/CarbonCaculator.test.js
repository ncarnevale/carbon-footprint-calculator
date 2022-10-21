import { render, screen } from '@testing-library/react';
import CarbonCalculator from '../CarbonCalculator';

const mockSummaryComponent = jest.fn();
jest.mock('../Summary', () => props => {
    mockSummaryComponent(props);
    return <div></div>;
});

describe('CarbonCalculator', () => {
    it ('renders transportation card', () => {
        render(<CarbonCalculator />);
        expect(screen.getByText('Transportation')).toBeInTheDocument();
    });

    it ('renders energy card', () => {
        render(<CarbonCalculator />);
        expect(screen.getByText('Energy')).toBeInTheDocument();
    });

    it ('renders summary with 0 values passed in by default', () => {
        render(<CarbonCalculator />);
        expect(mockSummaryComponent).toHaveBeenCalledWith({
            transportationTotal: 0,
            energyTotal: 0,
        })
    });
});
