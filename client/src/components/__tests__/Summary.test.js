import { render, screen } from '@testing-library/react';
import Summary from '../Summary';

const mockProps = {
    transportationTotal: 1000,
    energyTotal: 2000
};

const renderComponent = (props = mockProps) => {
    render(<Summary {...props} />);
}

describe('Summary', () => {
    it ('renders header', () => {
        renderComponent();
        const header = screen.getByText(/summary/i);
        expect(header).toBeInTheDocument();
    });

    it('displays & formats inputs correctly', () => {
        renderComponent();
        const transportationValue = screen.getByText('1,000');
        const energyValue = screen.getByText('2,000');
        expect(transportationValue).toBeInTheDocument();
        expect(energyValue).toBeInTheDocument();
    });

    it('displays & calculates net emissions', () => {
        renderComponent();
        const netValue = screen.getByText('3,000');
        expect(netValue).toBeInTheDocument();
    });
});
