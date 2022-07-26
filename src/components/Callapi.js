import  Axios  from "axios";
import { useState } from "react";
import './Callapi.css';


 function Callapi() {
    const[ query,setquery ] = useState("");
    const[recipes,setrecipes] = useState([])
   const YOUR_APP_ID="f4002f68";
    const YOUR_APP_KEY="b8be503cf42a2c99d509140caf32eea9";
    var url ="https://api.edamam.com/search?q="+query+"&app_id="+YOUR_APP_ID+"&app_key="+YOUR_APP_KEY+"&health=alcohol-free";
    async function getRecipes(){
        var result = await Axios.get(url);
        setrecipes(result.data.hits);
        console.log(result.data);

    }

    const onSubmit = (e) => {
        e.preventDefault();
        getRecipes();
    }
  return (
    <>
    <div>

    
    <div className="searchbaazi">
        <form className="search-food" onSubmit={onSubmit}>
        <input className="input" type="text" placeholder="What to MixItUp" value={query} onChange={(e) => setquery(e.target.value)}/>
        <input className="submit" type="submit" value="Search"/>



        </form>
        </div>

        <div className="RecipeTile">
            {recipes.map((recipes) =>{
                    return(
                    <div className="RecipeCard" onClick={ () => {
                        window.open(recipes["recipe"]["url"]);
                    }} >
                       <center> <img className="tileimg" src = {recipes["recipe"]["image"]}/></center>
                        <p className="tiletitle">{recipes["recipe"]["label"]}</p> 
                    </div>
                    );
                    })}
        </div>
        
   
     </div>
      
    </>
    )
}
export default Callapi