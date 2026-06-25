import { useState } from 'react'

type RegisterFormProps = {
    onRegister: (values: { email: string; password: string }) => void
}

export default function RegisterForm({ onRegister }: RegisterFormProps) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        if (!email) {
            setError('El email es obligatorio')
            return
        }

        if (password.length < 8) {
            setError('La contraseña debe tener al menos 8 caracteres')
            return
        }

        setError('')
        onRegister({ email, password })
    }

    return (
        <form onSubmit={handleSubmit} noValidate>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
            </div>

            <div>
                <label htmlFor="password">Contraseña</label>
                <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
            </div>

            {error ? <p role="alert">{error}</p> : null}

            <button type="submit">Crear cuenta</button>
        </form>
    )
}