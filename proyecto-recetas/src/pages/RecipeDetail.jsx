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
            <p className="recipe-detail__eyebrow">Detalle de la receta</p>
            <h1>{recipe.name}</h1>
            <p>{recipe.description}</p>
            <p className="recipe-detail__meta">
                Categoría: {recipe.type} · {recipe.timeMinutes} minutos
            </p>

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