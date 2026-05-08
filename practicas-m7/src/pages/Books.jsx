import { useSearchParams } from 'react-router-dom'
import { BOOKS } from '../data/books.js'
import BookCard from '../components/BookCard.jsx'
import { useState } from 'react'

function Books() {
    const [favoriteIds] = useState(() => {
        const storedFavorites = localStorage.getItem('favorite-books')

        if (storedFavorites === null) {
            return []
        }

        return JSON.parse(storedFavorites)
    })
    const [params, setParams] = useSearchParams()

    const q = params.get('q') || ''
    const cat = params.get('cat') || 'todas'

    function updateParam(key, value) {
        const nextParams = new URLSearchParams(params)

        if (value === '' || value === 'todas') {
            nextParams.delete(key)
        } else {
            nextParams.set(key, value)
        }

        setParams(nextParams)
    }

    const visibles = BOOKS
        .filter((book) => {
            return cat === 'todas' ? true : book.categoria === cat
        })
        .filter((book) => {
            const texto = `${book.titulo} ${book.autor} ${book.descripcion}`.toLowerCase()
            return texto.includes(q.toLowerCase())
        })

    return (
        <section className="page-section">
            <div className="books-header">
                <div>
                    <h1>Libros</h1>
                    <p>
                        Filtra el catálogo y comparte la URL para conservar la búsqueda.
                    </p>
                </div>

                <span className="books-total">Total: {visibles.length}</span>
            </div>

            <div className="books-toolbar">
                <input
                    type="search"
                    placeholder="Buscar por título, autor o descripción"
                    value={q}
                    onChange={(event) => updateParam('q', event.target.value)}
                />

                <select
                    value={cat}
                    onChange={(event) => updateParam('cat', event.target.value)}
                >
                    <option value="todas">Todas</option>
                    <option value="frontend">Frontend</option>
                    <option value="javascript">JavaScript</option>
                    <option value="diseño">Diseño</option>
                    <option value="backend">Backend</option>
                </select>
            </div>

            {visibles.length === 0 ? (
                <p className="empty-state">No hay libros que coincidan con los filtros.</p>
            ) : (
                <div className="books-grid">
                    {visibles.map((book) => (
                        <BookCard
                            key={book.id}
                            book={book}
                            isFavorite={favoriteIds.includes(book.id)}
                        />
                    ))}
                </div>
            )}
        </section>
    )
}

export default Books