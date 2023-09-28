import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "./movieedetails.css";
function MoviesDetails() {
    const api = "da65dec34b1987a5bf64214b8acdc067";
    const imagePath = "https://image.tmdb.org/t/p/w500";
  
  let { id } = useParams();
  const [movie, setMV] = useState({});
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}`,{
        params: {
          api_key: api,
        },})
      .then((response) => {
        console.log(response.data);
        setMV(response.data)
      })
      .catch((err) => console.log(err));
  }, []);

return (
    <>
        <div id="container">
            <div className="product-details">
                <h1>{movie.title}</h1>
                <span class="hint new">New</span>
                <span class="hint free-shipping">Free Shipping</span>
                <span class="hint-star star">
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star-half-o" aria-hidden="true"></i>
                <i className="fa fa-star-o" aria-hidden="true"></i>
                </span>
                <p className="information">
                {movie.overview}
                </p>
            </div>
            <div className="product-image">
                <img
                src={`${imagePath}${movie.poster_path}`} alt="Omar Dsoky"
                />
            </div>
        </div>
    </>
);
}
export default MoviesDetails;