import React from "react";
import Recipe from "../../interface/recipe";

const RecipePage = ({name, ingredients, directions}: Recipe ) => {


    const ingredientList = ingredients.map(({qty, measure, ingredient}) =>   {
        return <li>{qty} {measure} {ingredient}</li>
      })

    return <div>
          <h1>{name}</h1>
      <ul>
        {ingredientList}
      </ul>
      <p>{directions}</p>
    </div>
  
}

export default RecipePage