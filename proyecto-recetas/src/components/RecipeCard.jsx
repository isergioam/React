import { Link } from 'react-router-dom'
import '../styles/recipe.css'

function RecipeCard({ recipe, isFavorite = false }) {
    return (
        <article className="recipe-card">
            <div className="recipe-card__content">
                <div className="recipe-card__topline">
                    <span className="recipe-card__category">{recipe.type}</span>
                    {isFavorite && <span className="recipe-card__favorite">⭐ Favorito</span>}
                </div>

                <h2 className="recipe-card__title">{recipe.name}</h2>
                <p className="recipe-card__description">{recipe.description}</p>

                <p className="recipe-card__difficulty">Dificultad - {recipe.difficulty}</p>
                <p className="recipe-card__time">{recipe.timeMinutes} de preparación</p>
                <p className="recipe-card__ingredients">Ingredientes: {recipe.ingredients.join(', ')}</p>
                <p className="recipe-card__cost">Coste: {recipe.estimatedCost} €</p>


            </div>

            <Link className="recipe-card__link" to={`/recipes/${recipe.id}`}>
                Ver detalle
            </Link>
        </article>
    )
}

export default RecipeCard