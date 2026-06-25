import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import RegisterForm from './RegisterForm'
import userEvent from '@testing-library/user-event'

describe('RegisterForm', () => {
    // Test: muestra campos básicos
    it('muestra los campos del formulario', () => {
        render(<RegisterForm onRegister={vi.fn()} />)

        expect(screen.getByLabelText('Email')).toBeInTheDocument()
        expect(screen.getByLabelText('Contraseña')).toBeInTheDocument()
        expect(screen.getByRole('button', { name: 'Crear cuenta' })).toBeInTheDocument()
    }),
        // Test: envío vacío muestra error
        it('muestra error si el email está vacío', async () => {
            const user = userEvent.setup()
            const onRegister = vi.fn()

            render(<RegisterForm onRegister={onRegister} />)

            await user.click(screen.getByRole('button', { name: 'Crear cuenta' }))

            expect(screen.getByRole('alert')).toHaveTextContent('El email es obligatorio')
            expect(onRegister).not.toHaveBeenCalled()
        }),
        // Test: Contraseña corta
        it('muestra error si la contraseña es demasiado corta', async () => {
            const user = userEvent.setup()
            const onRegister = vi.fn()

            render(<RegisterForm onRegister={onRegister} />)

            await user.type(screen.getByLabelText('Email'), 'ana@example.com')
            await user.type(screen.getByLabelText('Contraseña'), '123')
            await user.click(screen.getByRole('button', { name: 'Crear cuenta' }))

            expect(screen.getByRole('alert')).toHaveTextContent(
                'La contraseña debe tener al menos 8 caracteres'
            )
            expect(onRegister).not.toHaveBeenCalled()
        }),
        // Test: envío correcto
        it('envía los datos si el formulario es válido', async () => {
            const user = userEvent.setup()
            const onRegister = vi.fn()

            render(<RegisterForm onRegister={onRegister} />)

            await user.type(screen.getByLabelText('Email'), 'ana@example.com')
            await user.type(screen.getByLabelText('Contraseña'), '12345678')
            await user.click(screen.getByRole('button', { name: 'Crear cuenta' }))

            expect(onRegister).toHaveBeenCalledWith({
                email: 'ana@example.com',
                password: '12345678'
            })
        })
})

