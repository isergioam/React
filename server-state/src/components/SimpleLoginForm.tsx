type SimpleLoginFormProps = {
    onLogin: (email: string) => void
}

export default function SimpleLoginForm({ onLogin }: SimpleLoginFormProps) {
    return (
        <form
            onSubmit={(event) => {
                event.preventDefault()
                const formData = new FormData(event.currentTarget)
                const email = String(formData.get('email'))
                onLogin(email)
            }}
        >
            <label htmlFor="email">Email</label>
            <input id="email" name="email" />
            <button type="submit">Entrar</button>
        </form>
    )
}