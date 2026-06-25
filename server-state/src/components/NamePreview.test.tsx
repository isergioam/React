import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import NamePreview from './NamePreview'

describe('NamePreview', () => {
    it('muestra lo que el usuario escribe', async () => {
        const user = userEvent.setup()
        render(<NamePreview />)

        const input = screen.getByLabelText('Nombre')
        await user.type(input, 'Ana')

        expect(screen.getByText('Vista previa: Ana')).toBeInTheDocument()
        expect(input).toHaveValue('Ana')
    })
})