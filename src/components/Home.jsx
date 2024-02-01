import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card.jsx";

const Home = () => {
    const [shows, setShows] = useState([]);
  
    useEffect(() => {
        axios.get('https://api.tvmaze.com/search/shows?q=all')
          .then(response => {
            setShows(response.data);
          })
          .catch(error => {
            console.error('Error fetching shows:', error);
          });
      }, []);

  return (
    <div className="home-container">
        {shows.map(show => (
              <Card key={show.show.id} id={show.show.id} name={show.show.name} 
              type={show.show.type} language={show.show.language} 
              genre={show.show.genres[0]} image={show.show.image ? show.show.image.medium : ""}/>
            ))}

    </div>
  )
}

export default Home