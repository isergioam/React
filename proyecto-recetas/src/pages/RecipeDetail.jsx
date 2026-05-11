import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
import { recipes } from '../data/recipes.js'
import RecipeFavoriteButton from '../components/RecipeFavoriteButton.jsx'

function RecipeDetail() {
    const { recipeId } = useParams()
    const recipe = recipes.find((item) => item.id === recipeId)

    const [favoriteIds, setFavoriteIds] = useState(() => {
        const storedFavorites = localStorage.getItem('favorite-recipes')

        if (storedFavorites === null) {
            return []
        }

        return JSON.parse(storedFavorites)
    })

    if (!recipe) {
        return (
            <section className="page-section">
                <h1>Receta no encontrada</h1>
                <p>No existe ninguna receta con el identificador {recipeId}.</p>
                <Link className="text-link" to="/recipes">
                    Volver al listado
                </Link>
            </section>
        )
    }

    const isFavorite = favoriteIds.includes(recipe.id)

    function toggleFavorite() {
        let updatedFavorites

        if (isFavorite) {
            updatedFavorites = favoriteIds.filter((id) => id !== recipe.id)
        } else {
            updatedFavorites = [...favoriteIds, recipe.id]
        }

        setFavoriteIds(updatedFavorites)
        localStorage.setItem('favorite-recipes', JSON.stringify(updatedFavorites))
    }

    return (
        <section className="page-section recipe-detail">
            <div className="recipe-cinematic-header">
                <img src={recipe.image} alt={recipe.name} className="recipe-cinematic-image" />
                <div className="recipe-cinematic-overlay">
                    <div className="recipe-card__topline">
                        <span className="recipe-card__category">{recipe.type}</span>
                        {isFavorite && <span className="recipe-card__favorite">⭐ Favorito</span>}
                    </div>
                    <h1 className="recipe-cinematic-title">{recipe.name}</h1>
                    <p className="recipe-cinematic-description">{recipe.description}</p>
                </div>
            </div>

            <div className="recipe-card__content">

                <div className="recipe-card__ingredients">
                    <h3>Ingredientes</h3>
                    <ul>
                        {recipe.ingredients.map((ingredient) => (
                            <li key={ingredient}>{ingredient}</li>
                        ))}
                    </ul>
                </div>

                <div className="recipe-card__meta-grid">
                    <p className="recipe-card__difficulty">⚡ {recipe.difficulty}</p>
                    <p className="recipe-card__time">⏱️ {recipe.timeMinutes} min</p>
                    <p className="recipe-card__cost">💰 {recipe.estimatedCost} €</p>
                </div>

            </div>


            <div className="recipe-detail__actions">
                <RecipeFavoriteButton active={isFavorite} onToggle={toggleFavorite} />
                <Link className="text-link" to="/recipes">
                    Volver al listado
                </Link>
            </div>

        </section>
    )
}

export default RecipeDetail