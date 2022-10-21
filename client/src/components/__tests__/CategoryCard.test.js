import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CategoryCard from '../CategoryCard';

const mockProps = {
    step: 3,
    title: 'mock-title',
    children: 'mock-content',
};

const renderComponent = (props = mockProps) => {
    render(<CategoryCard {...props} />);
}

describe('CategoryCard', () => {
    it ('renders title', () => {
        renderComponent();
        const header = screen.getByText(/mock-title/i);
        expect(header).toBeInTheDocument();
    });

    it ('renders step number', () => {
        renderComponent();
        const stepNum = screen.getByText('3');
        expect(stepNum).toBeInTheDocument();
    });


    it('toggles content visibility on arrow click', () => {
        renderComponent();
        const arrow = screen.getByLabelText(/collapse/);
        expect(arrow).toBeInTheDocument();
        expect(screen.getByText('mock-content')).toBeInTheDocument();
        userEvent.click(arrow);
        expect(screen.queryByText('mock-content')).not.toBeInTheDocument();
    });
});
