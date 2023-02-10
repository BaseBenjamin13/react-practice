import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from "react-router-dom";
import userEvent from '@testing-library/user-event';
import Counter from './components/Counter';

// test('renders learn react link', () => {
    //   render(<App />);
    //   const linkElement = screen.getByText(/learn react/i);
    //   expect(linkElement).toBeInTheDocument();
    // });
    let count;
    let increment;
    let decrement;
    
    beforeEach(() => {
        
        render(
            <MemoryRouter initialEntries={['/counter']}>
            <Counter />
        </MemoryRouter>    
        );
        count = screen.getByTestId('count')
        increment = screen.getByRole('button', { name: 'Increment' })
        decrement = screen.getByRole('button', { name: 'Decrement' })
    })
    
    it('should render a count, increment btn, & decrement btn', () => {
        expect(count).toBeInTheDocument();
        expect(increment).toBeInTheDocument();
        expect(decrement).toBeInTheDocument();
    })
    
    
    // Tests to do:
        it.todo('should render a counter with value of 1')
        it.todo('should increase count when plus button is clicked')
        it.todo('should decrease count when minus button is clicked')
        it.todo('should not decrease to less than 1')
    