import { useEffect, useState } from "react"
import { Pokemon } from "./Pokemon"
import axios from "axios"
import { Header } from "./Header"
import { Loading } from "./Loading"

export const Home = () =>{ 
    const [data,setData] = useState([])
    const [isloading, setIsLoading] =  useState(true);
    const [currentpage,setCurrentPage] = useState(0)

    const consultarApi = async () => {
         const url ='https://pokeapi.co/api/v2/pokemon?limit=1118'       
          const resp = await axios.get(url); 
          const list = resp.data.results;
          
          const pokemonArr = list.map(poke =>{
            const pokeArr = poke.url.split('/');
            const id  = pokeArr[6];
            const pic = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ id }.png`;

            return {
                id,
                pic,
                name: poke.name,
            }
          })
          setData(pokemonArr);
          setIsLoading(false);
          console.log(pokemonArr);
          return pokemonArr;
          
    }
    
    const filterPokemon = () =>{
        return data.slice(currentpage, currentpage + 5);
    }
    
    const nextPage = () => {
        setCurrentPage(currentpage + 5 );
    }

    const prevPage = () => {
        if (currentpage > 0 )
        setCurrentPage(currentpage - 5 );
    }

    useEffect(()=>{
        consultarApi()
        
    },[])
     
    return(
        <>
        <Header />
        <div>
            <div className="container">
                {
                    filterPokemon().map(xx =>(
                        <Pokemon 
                        key = {xx.id}
                        xx = {xx}
                    />
                    ))
                }
                
                {
                isloading && <Loading />
                }
            </div>
            <div className="pagination">
                <button 
                        className="btn-primary"
                        onClick={ prevPage }
                    >
                        Anteriores
                    </button>
                    &nbsp;
                    <button 
                        className="btn-primary"
                        onClick={ nextPage }
                    >
                        Siguientes
                    </button>
            </div>
        </div>
        </>
    )
}