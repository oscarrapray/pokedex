export const Pokemon = ({xx}) =>{

    return(
        <div className="card">
                <div className="card-img">
                    <img src={xx.pic} alt={xx.name} />
                </div>
                <div className="card-description">
                    <p>{xx.name}</p>
                </div>
        </div>
    )
}