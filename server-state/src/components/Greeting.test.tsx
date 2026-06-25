import { render, screen } from '@testing-library/react'
import Greeting from './Greeting'

describe('Greeting', () => {
    it('muestra el nombre recibido por props', () => {
        render(<Greeting name="Paco" />)

        expect(screen.getByRole('heading', { name: 'Hola, Paco' })).toBeInTheDocument()
    })
})