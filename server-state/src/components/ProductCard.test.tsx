import { render, screen } from '@testing-library/react'
import ProductCard from './ProductCard'

describe('ProductCard', () => {
    it('muestra título y precio', () => {
        render(<ProductCard title="Teclado" price={49} available={true} />)

        expect(screen.getByRole('heading', { name: 'Teclado' })).toBeInTheDocument()
        expect(screen.getByText('49 €')).toBeInTheDocument()
    })

    it('deshabilita el botón si no hay stock', () => {
        render(<ProductCard title="Ratón" price={20} available={false} />)

        expect(screen.getByRole('button', { name: 'Comprar' })).toBeDisabled()
        expect(screen.getByText('Agotado')).toBeInTheDocument()
    })
})