import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'
import SimpleLoginForm from './SimpleLoginForm'

describe('SimpleLoginForm', () => {
    it('envía el email escrito', async () => {
        const user = userEvent.setup()
        const onLogin = vi.fn()

        render(<SimpleLoginForm onLogin={onLogin} />)

        await user.type(screen.getByLabelText('Email'), 'ana@example.com')
        await user.click(screen.getByRole('button', { name: 'Entrar' }))

        expect(onLogin).toHaveBeenCalledWith('ana@example.com')
    })
})