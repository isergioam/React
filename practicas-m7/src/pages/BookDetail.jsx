import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
import { BOOKS } from '../data/books.js'
import FavoriteButton from '../components/FavoriteButton.jsx'

function BookDetail() {
    const { bookId } = useParams()
    const book = BOOKS.find((item) => item.id === bookId)

    const [favoriteIds, setFavoriteIds] = useState(() => {
        const storedFavorites = localStorage.getItem('favorite-books')

        if (storedFavorites === null) {
            return []
        }

        return JSON.parse(storedFavorites)
    })

    if (!book) {
        return (
            <section className="page-section">
                <h1>Libro no encontrado</h1>
                <p>No existe ningún libro con el identificador {bookId}.</p>
                <Link className="text-link" to="/books">
                    Volver al listado
                </Link>
            </section>
        )
    }

    const isFavorite = favoriteIds.includes(book.id)

    function toggleFavorite() {
        let updatedFavorites

        if (isFavorite) {
            updatedFavorites = favoriteIds.filter((id) => id !== book.id)
        } else {
            updatedFavorites = [...favoriteIds, book.id]
        }

        setFavoriteIds(updatedFavorites)
        localStorage.setItem('favorite-books', JSON.stringify(updatedFavorites))
    }

    return (
        <section className="page-section book-detail">
            <p className="book-detail__eyebrow">Detalle del libro</p>
            <h1>{book.titulo}</h1>
            <p className="book-detail__author">Autor: {book.autor}</p>
            <p>{book.descripcion}</p>
            <p className="book-detail__meta">
                Categoría: {book.categoria} · {book.paginas} páginas
            </p>

            <div className="book-detail__actions">
                <FavoriteButton active={isFavorite} onToggle={toggleFavorite} />
                <Link className="text-link" to="/books">
                    Volver al listado
                </Link>
            </div>
        </section>
    )
}

export default BookDetail