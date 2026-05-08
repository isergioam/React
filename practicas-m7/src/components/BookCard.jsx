import { Link } from 'react-router-dom'
import './BookCard.css'

function BookCard({ book, isFavorite = false }) {
    return (
        <article className="book-card">
            <div className="book-card__content">
                <div className="book-card__topline">
                    <span className="book-card__category">{book.categoria}</span>
                    {isFavorite && <span className="book-card__favorite">⭐ Favorito</span>}
                </div>

                <h2 className="book-card__title">{book.titulo}</h2>
                <p className="book-card__author">Autor: {book.autor}</p>
                <p className="book-card__description">{book.descripcion}</p>
                <p className="book-card__pages">{book.paginas} páginas</p>
            </div>

            <Link className="book-card__link" to={`/books/${book.id}`}>
                Ver detalle
            </Link>
        </article>
    )
}

export default BookCard