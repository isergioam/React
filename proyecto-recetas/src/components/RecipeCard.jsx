import { Link } from 'react-router-dom'
import '../styles/recipe.css'

function RecipeCard({ recipe, isFavorite = false }) {
    return (
        <article className="recipe-card">
            <img src={recipe.image} alt={recipe.name} className="recipe-card__bg" />
            <div className="recipe-card__overlay">
                <div className="recipe-card__content">
                    <div className="recipe-card__topline">
                        <span className="recipe-card__category">{recipe.type}</span>
                        {isFavorite && <span className="recipe-card__favorite">⭐ Favorito</span>}
                    </div>

                    <h2 className="recipe-card__title">{recipe.name}</h2>

                </div>

                <Link className="recipe-card__link" to={`/recipes/${recipe.id}`}>
                    Ver detalle
                </Link>
            </div>
        </article>
    )
}

export default RecipeCard