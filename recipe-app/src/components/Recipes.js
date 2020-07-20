import React from "react";
import style from './styles/recipes.module.css'
// import './styles/Recipes.css'

function Recipes({ title, calories, image, ingredients }) {
  // props destructuring. We could use for example props.label
  return (
    // <div className={style.recipe}>
    <div className={style.recipe}>
      <h1>{title}</h1>
      <h2>Ingredients</h2>
      <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>
        <strong>Calories: </strong>
        {calories}
      </p>
      <img className={style.img} src={image} alt="" />
    </div>
  );
}
export default Recipes;
