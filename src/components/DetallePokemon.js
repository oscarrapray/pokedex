import axios from 'axios';
import {useState,useEffect} from 'react'
import { Link,useParams } from "react-router-dom";
//import { Header } from "./Header";

export const DetallePokemon = () =>{
    const[info,setInfo] = useState({})
    const[hab,setHab] = useState('')
    const params = useParams()
    let dato = params.id
    const pic = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ dato }.png`;


    const consultarApi = async () =>{
       const url = `https://pokeapi.co/api/v2/pokemon/${dato}/`
       const resp = await axios.get(url)
       setInfo(resp.data)

       console.log(resp.data)
       let abilities = resp.data.abilities.map(x => x.ability.name).join(', ')
       setHab(abilities)
    }
    useEffect(()=>{
        consultarApi()
         // eslint-disable-next-line react-hooks/exhaustive-deps
    },[dato])
    return(
        <>
         
        <div className="container-detail">
            <div className='l-grid'>
                <Link to={'/'}> <p className="link-home">Regresar</p> </Link>
                <div className='detail'>
                    <div className='detail_img'>
                    <img src={pic} alt={info.name} />
                    </div>
                    <div className='detail_info'>
                        <p><b>Pokemon: </b> {info.name} </p><br></br>
                        <p><b>Habilidades: </b> {hab}</p>
                    </div>
                </div>
            </div> 
        </div>
        </>
    )
}