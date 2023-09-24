import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import addToFavorite from '../../store/actions';


const Favorite = () => {
  const imagePath = "https://image.tmdb.org/t/p/w500";
  const myFavorite = useSelector(state => state.favorite)
  const myDispatcher = useDispatch();

  const removeMovie = (movie) => {
    const removeItem = myFavorite.filter(mov => mov.id !== movie.id)
    myDispatcher(addToFavorite([...removeItem]))
  }

  return (
<div className="row justify-content-center">
          {myFavorite.map((tv) => (
            <div className="card movie_card">
              <img
                src={`${imagePath}${tv.poster_path}`}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title" style={{ fontWeight: "bold" }}>
                  {tv.title}
                </h5>
                <span className="movie_info">{tv.release_date}</span>
                <span className="movie_info float-right">
                  <i className="fas fa-star"></i> {tv.vote_average}/10
                </span>
                <button className="btn btn-danger" onClick={() => removeMovie(tv)}>
                  remove
                </button>
                <Link to={`/tvdetails/${tv.id}`} className="btn btn-success">
                  See Movie Details
                </Link>
                {/* <Link to={`/TvDetails/${tv.id}`}>See ?details</Link> */}
              </div>
            </div>
          ))}
          </div>
  )
}

export default Favorite