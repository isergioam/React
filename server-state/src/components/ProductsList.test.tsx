import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import ProductsList from './ProductsList'
import { getProducts } from '../services/products.service'

vi.mock('../services/products.service', () => ({
    getProducts: vi.fn()
}))

const mockedGetProducts = vi.mocked(getProducts)
// Test: loading y éxito
it('muestra productos cuando la API responde correctamente', async () => {
    mockedGetProducts.mockResolvedValue([
        { id: 1, title: 'Teclado' },
        { id: 2, title: 'Ratón' }
    ])

    render(<ProductsList />)

    expect(screen.getByText('Cargando productos...')).toBeInTheDocument()

    expect(await screen.findByText('Teclado')).toBeInTheDocument()
    expect(screen.getByText('Ratón')).toBeInTheDocument()
}),
    // Test: Error
    it('muestra error si la API falla', async () => {
        mockedGetProducts.mockRejectedValue(new Error('API error'))

        render(<ProductsList />)

        expect(await screen.findByRole('alert')).toHaveTextContent(
            'No se pudieron cargar los productos'
        )
    })