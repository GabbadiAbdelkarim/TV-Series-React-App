import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";

const SingleSeries =() => {

    const { id } = useParams();
    console.log(id);
    const [show, setShow] = useState(null);
      useEffect(() => {
        setTimeout(() => {
            fetch(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
            .then((response) => response.json()) //promise
            .then(json => setShow(json))
        }, 1000);
      }, [id]); 
      
      return (
        <div>
            {!show && <Loader />}
            {
                show 
                &&
                <div>
                    <p>{show.name}</p>
                    <p>Date sortie - {show.premiered}</p>
                    <p>Rating - {show.rating.average}</p>
                    <p>Episodes - {show._embedded.episodes.length}</p>
                    <p>
                        <img
                            alt="Show"
                            src={show.image.medium} />
                    </p>
                </div>
            }
        </div>
    );
}

export default SingleSeries;