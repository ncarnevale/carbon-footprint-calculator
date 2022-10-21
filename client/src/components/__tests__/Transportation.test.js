import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Transportation from '../Transportation';

const mockProps = {
    onUpdateTotal: jest.fn(),
};

const renderComponent = (props = mockProps) => {
    render(<Transportation {...props} />);
}

describe('Transportation', () => {
    beforeEach(() => {
        jest.spyOn(global, 'fetch').mockResolvedValue({
          json: jest.fn().mockResolvedValue({carbonTotal: 500})
        })
      });

    it ('renders form text', () => {
        renderComponent();
        expect(screen.getByText(/miles/i)).toBeInTheDocument();
    });

    it('sends request to transportation endpoint on submit', () => {
        renderComponent();
        const submitBtn = screen.getByRole('button', {
            name: /submit/i
        });
        userEvent.click(submitBtn);
        expect(global.fetch).toHaveBeenCalledWith(expect.stringMatching(/api\/transportation/));
    });

    it('calls onUpdateTotal with endpoint response', async () => {
        renderComponent();
        const submitBtn = screen.getByRole('button', {
            name: /submit/i
        });
        userEvent.click(submitBtn);
        await waitFor(() => expect(mockProps.onUpdateTotal).toHaveBeenCalledWith(500));
    });


    afterEach(() => {
        jest.restoreAllMocks();
    });
});
