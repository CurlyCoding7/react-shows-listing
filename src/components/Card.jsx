import { Link } from "react-router-dom"

const Card = ({id, name, type, language, genre, image}) => {
  return (
    <div className="card-container">
        <img src={image} alt={name} />
        <h2>{name}</h2>
        <p>Type: {type}</p>
        <p>Language: {language}</p>
        <p>Genre: {genre}</p>
        <Link to={`/show/${id}`}>
                  <button>View Details</button>
        </Link>
    </div>
  )
}

export default Card