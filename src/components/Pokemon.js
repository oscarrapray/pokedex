import {Link} from 'react-router-dom'

export const Pokemon = ({pok}) =>{
    return(
        <div className="card">
                <div className="card-img">
                <Link to={`/${pok.id}`}> <img src={pok.pic} alt={pok.name} /></Link>
                </div>
                <div className="card-description">
                    <Link to={`/${pok.id}`}> <p>{pok.name}</p></Link>
                </div>
        </div>
    )
}