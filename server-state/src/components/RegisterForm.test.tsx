import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import RegisterForm from './RegisterForm'
import userEvent from '@testing-library/user-event'

describe('RegisterForm', () => {
    it('muestra los campos del formulario', () => {
        render(<RegisterForm onRegister={vi.fn()} />)

        expect(screen.getByLabelText('Email')).toBeInTheDocument()
        expect(screen.getByLabelText('Contraseña')).toBeInTheDocument()
        expect(screen.getByRole('button', { name: 'Crear cuenta' })).toBeInTheDocument()
    })
})

it('muestra error si el email está vacío', async () => {
    const user = userEvent.setup()
    const onRegister = vi.fn()

    render(<RegisterForm onRegister={onRegister} />)

    await user.click(screen.getByRole('button', { name: 'Crear cuenta' }))

    expect(screen.getByRole('alert')).toHaveTextContent('El email es obligatorio')
    expect(onRegister).not.toHaveBeenCalled()
})