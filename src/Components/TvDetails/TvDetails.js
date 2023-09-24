import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./TvDetails.css";

function TvDetails() {
  let { id } = useParams();
  const [tv, setTv] = useState([]);
  const api = "d49eccadf09a51451f7a86f2da66b0c7";
  const imagePath = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}`, {
        params: {
          api_key: api,
        },
      })
      .then((response) => {
        // console.log(response.data);
        setTv(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div id="container">
        <div class="product-details">
          <h1>{tv.name}</h1>

          <span class="hint-star star">
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star-half-o" aria-hidden="true"></i>
            <i class="fa fa-star-o" aria-hidden="true"></i>
          </span>

          <p class="information">{tv.overview}</p>
        </div>

        <div class="product-image">
          <img src={`${imagePath}${tv.poster_path}`} alt="Omar Dsoky" />
        </div>
      </div>
    </>
  );
}

export default TvDetails;
