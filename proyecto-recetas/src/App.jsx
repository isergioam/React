import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout.jsx'
import Home from './pages/Home.jsx'
import Recipes from './pages/Recipes.jsx'
import RecipeDetail from './pages/RecipeDetail.jsx'
import FavoriteRecipes from './pages/FavoriteRecipes.jsx'
import NotFound from './pages/NotFound.jsx'

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="recipes" element={<Recipes />} />
        <Route path="recipes/:recipeId" element={<RecipeDetail />} />
        <Route path="favorites" element={<FavoriteRecipes />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App