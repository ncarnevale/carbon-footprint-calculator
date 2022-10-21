import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Radio from '../Radio';

const mockProps = {
    name: 'mock-name',
    value: 'mock-value',
    id: 'mock-id',
    checked: false,
    onCheck: jest.fn()
}

const renderComponent = (props = mockProps) => {
    return render(<Radio {...props} />);
}

describe('Radio', () => {
    it ('renders radio input', () => {
        renderComponent();
        expect(screen.getByRole('radio', {name: 'mock-value'})).toBeInTheDocument();
    });

    it ('sets checked based on prop', () => {
        const {rerender} = renderComponent();
        let radio = screen.getByRole('radio', {name: 'mock-value'});
        expect(radio.checked).toEqual(false);
        rerender(<Radio {...mockProps} checked="true" />);
        expect(radio.checked).toEqual(true);
    });

    it ('calls onCheck when checked', () => {
        renderComponent();
        const radio = screen.getByRole('radio', {name: 'mock-value'});
        userEvent.click(radio);
        expect(mockProps.onCheck).toHaveBeenCalled();
    });

});
