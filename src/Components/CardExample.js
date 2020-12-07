import React,{useState,useEffect} from 'react'
import axios from 'axios'

import './card.css'
const CardExample = (props) => {
  const[ndrinks,getndrink]=useState([])
  useEffect(() => {
      let ignore=true
      async function fetchData(){
        try{
      const res=await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${props.drinkId}`)
      if(ignore===true){getndrink(res.data.drinks[0])}
        }catch(err){
          console.log(err)
        }
        return ()=>{ignore=false}
  }
  fetchData();
}, [props.drinkId])
  const renderCard=()=>{
      if(props.call && !props.call1){
          if(ndrinks.strCategory===props.arg){
               return (<div className="cards">
               <div>
                 <img className="img" src={ndrinks.strDrinkThumb} alt="pic_drink"/>
                 <div>
                 <h3>{ndrinks.strDrink}</h3>
                 <div>
                         <p >Glass: {ndrinks.strGlass}</p>
                         <p>Ingredients: {ndrinks.strIngredient1} {ndrinks.strIngredient2} {ndrinks.strIngredient3} {ndrinks.strIngredient4} {ndrinks.strIngredient5} {ndrinks.strIngredient6}</p>
                         </div>
                         <p>
                         Category: {ndrinks.strCategory} 
                         </p>
                         <p>
                         Alcoholic: {ndrinks.strAlcoholic}
                         </p>
                 </div>
                 </div>
                 </div>
               )
          }
      }else if(props.call1&&!props.call){
        if(ndrinks.strAlcoholic===props.arg1){
            return (<div className="cards">
            <div>
              <img className="img" src={ndrinks.strDrinkThumb} alt="pic_drink"/>
              <div>
              <h3>{ndrinks.strDrink}</h3>
              <div>
                      <p >Glass: {ndrinks.strGlass}</p>
                      <p>Ingredients: {ndrinks.strIngredient1} {ndrinks.strIngredient2} {ndrinks.strIngredient3} {ndrinks.strIngredient4} {ndrinks.strIngredient5} {ndrinks.strIngredient6}</p>
                      </div>
                      <p>
                      Category: {ndrinks.strCategory} 
                      </p>
                      <p>
                      Alcoholic: {ndrinks.strAlcoholic}
                      </p>
              </div>
              </div>
              </div>
            )
       }
      }else if(props.call1&&props.call){
        if(ndrinks.strAlcoholic===props.arg1&&ndrinks.strCategory===props.arg){
          return (<div className="cards">
          <div>
            <img className="img" src={ndrinks.strDrinkThumb} alt="pic_drink"/>
            <div>
            <h3>{ndrinks.strDrink}</h3>
            <div>
                    <p >Glass: {ndrinks.strGlass}</p>
                    <p>Ingredients: {ndrinks.strIngredient1} {ndrinks.strIngredient2} {ndrinks.strIngredient3} {ndrinks.strIngredient4} {ndrinks.strIngredient5} {ndrinks.strIngredient6}</p>
                    </div>
                    <p>
                    Category: {ndrinks.strCategory} 
                    </p>
                    <p>
                    Alcoholic: {ndrinks.strAlcoholic}
                    </p>
            </div>
            </div>
            </div>
          )
      }
    } else{
          return (<div className="cards">
          <div>
            <img className="img" src={ndrinks.strDrinkThumb} alt="pic_drink"/>
            <div>
            <h3>{ndrinks.strDrink}</h3>
            <div>
                    <p >Glass: {ndrinks.strGlass}</p>
                    <p>Ingredients: {ndrinks.strIngredient1} {ndrinks.strIngredient2} {ndrinks.strIngredient3} {ndrinks.strIngredient4} {ndrinks.strIngredient5} {ndrinks.strIngredient6}</p>
                    </div>
                    <p>
                    Category: {ndrinks.strCategory} 
                    </p>
                    <p>
                    Alcoholic: {ndrinks.strAlcoholic}
                    </p>
            </div>
            </div>
          </div>
          )
      }
  }
  return(
    <div className="success">{renderCard()}</div>
)
}
export default CardExample
