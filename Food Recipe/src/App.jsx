import React, { useEffect, useState } from "react";
import Recipes from "./Recipes";
import "./App.css"

function App() {
  const [query, setQuery] = useState("");
  const [dish, setDish] = useState("");
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getrecipe();
  }, [dish]);

  const getrecipe = async () => {
    const res = await fetch(
      `https://api.edamam.com/search?q=${dish}&app_id=fe130652&app_key=3d1f05b226b72ca9960850bd0c48918b`
    );

    const data = await res.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const changler = e => {
    setQuery(e.target.value);
  };
  const handler = e => {
    e.preventDefault();
    setDish(query);
  };
  return (
    <div className="container">
      <form action="#" onSubmit={handler} className="search-form">
        <input type="text" value={query} onChange={changler} className="search-bar"/>
        <input type="submit" value="Search" className="search-btn"/>
      </form>
      <div className="resipes">
      {recipes.map(recipe => (
          <Recipes
          key={recipe.recipe.label}
            title={recipe.recipe.label}
            img={recipe.recipe.image}
            calories={recipe.recipe.calories}
            diet={recipe.recipe.dietLabels}
            ingridiants={recipe.recipe.ingredientLines}
          />
        ))}
        </div>
    </div>
  );
}

export default App;
