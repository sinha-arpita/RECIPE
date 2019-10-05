import React from "react"
const Recipe=({title,calories,image,ingredients})=>{
    return(
        <div>
            <h1>{title}</h1>
            
            <p>Calories:{calories}</p>
            <img src={image} alt=""/>
            <ol>Ingredients:{ingredients.map(ingredient =>{
                 return <li>{ingredient.text}</li>
            })}</ol>
        </div>
    )
}
export default Recipe