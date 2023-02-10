import { render, screen } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";
import userEvent from '@testing-library/user-event';
import Counter from '../components/Counter';


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
    
    it('should render a counter with value of 0', () => {
        expect(count).toHaveTextContent(0);
    })
    
    it('should increase count when increment button is clicked', () => {
        expect(count).toHaveTextContent(0);
        userEvent.click(increment);
        expect(count).toHaveTextContent(1);
    })
    
    it('should decrease count when minus button is clicked', () =>{
        userEvent.click(increment);
        expect(count).toHaveTextContent(1);
        userEvent.click(decrement);
        expect(count).toHaveTextContent(0);
    })
    
    // Tests to do:
        it.todo('should not decrease to less than 1')
    