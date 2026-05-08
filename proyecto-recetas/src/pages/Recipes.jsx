import { useSearchParams } from 'react-router-dom'
import { recipes } from '../data/recipes.js'
import RecipeCard from '../components/RecipeCard.jsx'
import { useState } from 'react'

function Recipes() {
    const [favoriteIds] = useState(() => {
        const storedFavorites = localStorage.getItem('favorite-recipes')

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

    const visibles = recipes
        .filter((recipe) => {
            return cat === 'todas' ? true : recipe.type === cat
        })
        .filter((recipe) => {
            const texto = `${recipe.name} - ${recipe.description}`.toLowerCase()
            return texto.includes(q.toLowerCase())
        })

    return (
        <section className="page-section">
            <div className="recipes-header">
                <div>
                    <h1>Recetas</h1>
                    <p>
                        Filtra el catálogo y comparte la URL para conservar la búsqueda.
                    </p>
                </div>

                <span className="recipes-total">Total: {visibles.length}</span>
            </div>

            <div className="recipes-toolbar">
                <input
                    type="search"
                    placeholder="Buscar por nombre, tipo o descripción"
                    value={q}
                    onChange={(event) => updateParam('q', event.target.value)}
                />

                <select
                    value={cat}
                    onChange={(event) => updateParam('cat', event.target.value)}
                >
                    <option value="todas">Todas</option>
                    <option value="desayuno">Desayuno</option>
                    <option value="comida">Comida</option>
                    <option value="cena">Cena</option>
                </select>
            </div>

            {visibles.length === 0 ? (
                <p className="empty-state">No hay recetas que coincidan con los filtros.</p>
            ) : (
                <div className="recipes-grid">
                    {visibles.map((recipe) => (
                        <RecipeCard
                            key={recipe.id}
                            recipe={recipe}
                            isFavorite={favoriteIds.includes(recipe.id)}
                        />
                    ))}
                </div>
            )}
        </section>
    )
}

export default Recipes