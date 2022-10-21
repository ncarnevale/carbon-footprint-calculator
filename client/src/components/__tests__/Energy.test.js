import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Energy from '../Energy';

const mockProps = {
    onUpdateTotal: jest.fn(),
};

const renderComponent = (props = mockProps) => {
    render(<Energy {...props} />);
}

describe('Energy', () => {
    beforeEach(() => {
        jest.spyOn(global, 'fetch').mockResolvedValue({
          json: jest.fn().mockResolvedValue({energyTotal: 200})
        })
      });

    it ('renders form text', () => {
        renderComponent();
        expect(screen.getByText(/natural gas/i)).toBeInTheDocument();
    });

    it('sends request to energy endpoint on submit', () => {
        renderComponent();
        const submitBtn = screen.getByRole('button', {
            name: /submit/i
        });
        userEvent.click(submitBtn);
        expect(global.fetch).toHaveBeenCalledWith(expect.stringMatching(/api\/energy/));
    });

    it('calls onUpdateTotal with endpoint response', async () => {
        renderComponent();
        const submitBtn = screen.getByRole('button', {
            name: /submit/i
        });
        userEvent.click(submitBtn);
        await waitFor(() => expect(mockProps.onUpdateTotal).toHaveBeenCalledWith(200));
    });


    afterEach(() => {
        jest.restoreAllMocks();
    });
});
