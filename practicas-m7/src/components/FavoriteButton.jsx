import './FavoriteButton.css'

function FavoriteButton({ active, onToggle }) {
    return (
        <button
            className={active ? 'favorite-button favorite-button--active' : 'favorite-button'}
            type="button"
            onClick={onToggle}
            aria-pressed={active}
        >
            {active ? '⭐ Quitar de favoritos' : '☆ Añadir a favoritos'}
        </button>
    )
}

export default FavoriteButton