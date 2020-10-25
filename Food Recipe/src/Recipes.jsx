import React from "react";
import style from './recipes.module.css'

function Recipes({ title, img, calories, diet, ingridiants }) {
  return (
    <div className={style.recipe}>
      <h1 >{title}</h1>

      <img src={img} alt="not render" />

      <p> calories - {calories}</p>

  <p>fat - {diet}</p>
  <ol>
    {
        ingridiants.map(ingridiant => (
            <li>{ingridiant}</li>
        ))
    }
  </ol>
    </div>
  );
}

export default Recipes;
