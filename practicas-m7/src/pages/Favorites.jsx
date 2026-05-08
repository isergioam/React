import { useState } from 'react'
import BookCard from '../components/BookCard.jsx'
import { BOOKS } from '../data/books.js'

function Favorites() {
    const [favoriteIds] = useState(() => {
        const storedFavorites = localStorage.getItem('favorite-books')

        if (storedFavorites === null) {
            return []
        }

        return JSON.parse(storedFavorites)
    })

    const favoriteBooks = BOOKS.filter((book) => favoriteIds.includes(book.id))

    return (
        <section className="page-section">
            <div className="books-header">
                <div>
                    <h1>Favoritos</h1>
                    <p>Libros guardados en este navegador.</p>
                </div>

                <span className="books-total">Total: {favoriteBooks.length}</span>
            </div>

            {favoriteBooks.length === 0 ? (
                <p className="empty-state">Todavía no has marcado ningún libro como favorito.</p>
            ) : (
                <div className="books-grid">
                    {favoriteBooks.map((book) => (
                        <BookCard key={book.id} book={book} isFavorite />
                    ))}
                </div>
            )}
        </section>
    )
}

export default Favorites