import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Counter from './Counter'

describe('Counter', () => {
    it('incrementa el contador al hacer clic', async () => {
        const user = userEvent.setup()
        render(<Counter />)

        const button = screen.getByRole('button', { name: 'Sumar' })
        await user.click(button)

        expect(screen.getByText('Contador: 1')).toBeInTheDocument()
    })
})