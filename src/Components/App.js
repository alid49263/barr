import React,{useState} from 'react'
import Mainbody from './Mainbody'
import Searchbar from './Searchbar'
import axios from 'axios'

    
function App() {
    const[drinks,getDrink]=useState([])
    const onSearchSubmit=async(term)=>{
      const responce=await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${term}`)
      getDrink(responce.data)
    }
    console.log(drinks)
    
    return (
        <div>
        <div className="s_bar">
            <Searchbar  callback={onSearchSubmit}/>
        </div>
        <div className="mbody1">
            <Mainbody 
            drink={drinks.drinks}/>
        </div>    
        </div>
    )
}

export default App
