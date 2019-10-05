import React,{useEffect,useState} from 'react';
import Recipe from  "./components/Recipe"
import logo from './logo.svg';
import './App.css';
import axios from "axios"
//Application ID
//3af59ab6

//This is the application ID, you should send with each API request.

//Application Keys
//19c0bff96207a4ba516db069e82e920d	—


function App() {
      const App_ID="3af59ab6";
      const App_Key="19c0bff96207a4ba516db069e82e920d"
      const[recipes,setRecipe]=useState([])
      const[search,setSearch]=useState("")
      const[query,setQuery]=useState("chicken")
      useEffect(()=>{
        
        getRecipe();
      },[query]) 
      
      const getRecipe = ()=>{
         
         const api_recipe=  axios.get(`https://api.edamam.com/search?q=${query}&app_id=${App_ID}&app_key=${App_Key}`)
                           .then(response =>{
                             console.log(response)
                             //console.log(response.hits)
                             setRecipe(response.data.hits)
                           }).catch(error =>{
                            console.log("the Error is ",error)

                          })
      }
      
  const onChangeHandler=(event)=>{
        
        setSearch(event.target.value)
        //console.log(search)
      }

const submitHandler=(event)=>{
  event.preventDefault();
  setQuery(search)//instead of updating every single letter we are updatin g the state with a complete search
  setSearch("")
}
  return (

    <>

      <div className="App">
        <h1 className="head">RECEPIES</h1>
        
        <form onSubmit={submitHandler} className="form">
            <input className="search-bar" type="text" value={search} onChange={onChangeHandler}/>
            <button className="search-button">Search</button>

        </form>
        <div className="detail">
            {recipes.map (recipe=>{
                return (
                 <Recipe key={recipe.recipe.label} 
                   title={recipe.recipe.label}calories={recipe.recipe.calories}
                   image={recipe.recipe.image}
                   ingredients={recipe.recipe.ingredients}/>
                )
        })}
        </div>

      
    
      
      </div>
    </>
  );
}

export default App;
