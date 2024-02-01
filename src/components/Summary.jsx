import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Summary = () => {
    const { id } = useParams();
    const [show, setShow] = useState(null);

    useEffect(() => {
        fetch(`https://api.tvmaze.com/shows/${id}`)
          .then(response => response.json())
          .then(data => setShow(data))
          .catch(error => {
            console.error('Error fetching show details:', error);
          });
      }, [id]);
    
      if (!show) return <p>Loading...</p>;
  
  return (
    <div className="summary-container">
        <div className="summary-card">
            <img src={show.image ? show.image.medium : ""} alt={show.name} />
        <h2>{show.name}</h2>
        <p>{show.summary}</p>
        <button onClick={() => alert(`Booking ticket for ${show.name}`)}>Book Ticket</button>
        <Link to={`/`}>
        <button>Back</button>
        </Link>
        </div>
   
  </div>
  )
}

export default Summary