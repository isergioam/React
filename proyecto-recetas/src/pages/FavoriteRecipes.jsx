import { useState } from 'react'
import RecipeCard from '../components/RecipeCard.jsx'
import { recipes } from '../data/recipes.js'

function FavoriteRecipes() {
    const [favoriteIds] = useState(() => {
        const storedFavorites = localStorage.getItem('favorite-recipes')

        if (storedFavorites === null) {
            return []
        }

        return JSON.parse(storedFavorites)
    })

    const favoriteRecipes = recipes.filter((recipe) => favoriteIds.includes(recipe.id))

    return (
        <section className="page-section">
            <div className="recipes-header">
                <div>
                    <h1>Favoritos</h1>
                    <p>Recetas guardadas en este navegador.</p>
                </div>

                <span className="recipes-total">Total: {favoriteRecipes.length}</span>
            </div>

            {favoriteRecipes.length === 0 ? (
                <p className="empty-state">Todavía no has marcado ninguna receta como favorita.</p>
            ) : (
                <div className="recipes-grid">
                    {favoriteRecipes.map((recipe) => (
                        <RecipeCard key={recipe.id} recipe={recipe} isFavorite />
                    ))}
                </div>
            )}
        </section>
    )
}

export default FavoriteRecipes