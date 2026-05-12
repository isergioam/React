import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
    const [theme, setTheme] = useState(() => {
        return document.documentElement.getAttribute('data-theme') || 
            (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    })

    const toggleTheme = () => {
        const nextTheme = theme === 'light' ? 'dark' : 'light'
        setTheme(nextTheme)
        document.documentElement.setAttribute('data-theme', nextTheme)
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
    }, [theme])

    return (
        <nav className="navbar" aria-label="Navegación principal">
            <NavLink className="navbar__link" to="/" end>
                Inicio
            </NavLink>

            <NavLink className="navbar__link" to="/experiencia">
                Experiencia
            </NavLink>

            <NavLink className="navbar__link" to="/estudios">
                Estudios
            </NavLink>

            <NavLink className="navbar__link" to="/contacto">
                Contacto
            </NavLink>

            <button 
                onClick={toggleTheme} 
                className="navbar__link" 
                style={{ 
                    background: 'transparent', 
                    cursor: 'pointer', 
                    fontFamily: 'var(--mono)',
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '0.4rem',
                    fontSize: '0.85rem',
                    padding: '0.5rem 1rem'
                }}
                title={`Cambiar a modo ${theme === 'light' ? 'oscuro' : 'claro'}`}
                aria-label="Alternar tema claro/oscuro"
            >
                <span style={{ display: 'inline-flex', color: 'var(--accent)' }}>
                    {theme === 'light' ? (
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="5"></circle>
                            <line x1="12" y1="1" x2="12" y2="3"></line>
                            <line x1="12" y1="21" x2="12" y2="23"></line>
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                            <line x1="1" y1="12" x2="3" y2="12"></line>
                            <line x1="21" y1="12" x2="23" y2="12"></line>
                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                        </svg>
                    ) : (
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                    )}
                </span>
                <span>{theme === 'light' ? 'CLARO' : 'OSCURO'}</span>
            </button>
        </nav>
    )
}

export default NavBar