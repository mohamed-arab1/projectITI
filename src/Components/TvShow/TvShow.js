import axios from "axios";
import React, { useEffect, useState } from "react";
import "./TvShow.css";
import { Link, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";

function TvShow() {
  const api = "d49eccadf09a51451f7a86f2da66b0c7";
  const imagePath = "https://image.tmdb.org/t/p/w500";
  const [alltvs, setAllTvs] = useState([]);
  const [lang, setLang] = useState(["en-US"]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState([]);
  let totalPages;
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?`, {
        params: {
          api_key: api,
          language: lang,
          page: page,
          // search: search,
        },
      })
      .then((response) => {
        // console.log(response.data.results);

        setAllTvs(response.data.results);
      })
      .catch((err) => console.log(err));

    if (search != "") {
      axios
        .get(`https://api.themoviedb.org/3/search/movie?`, {
          params: {
            api_key: api,
            query: search,
          },
        })
        .then((response) => {
          // console.log(response.data.results);

          setAllTvs(response.data.results);
        })
        .catch((err) => console.log(err));
    }
  }, [lang, page, search]);

  const changLang = () => {
    setLang(lang == "en-US" ? "ar-SA" : "en-US");
  };
  const showNext = () => {
    let currentPage = page;
    currentPage++;
    setPage(currentPage);
  };
  const showPrev = () => {
    let currentPage = page;
    if (!currentPage <= 1) {
      currentPage--;
      setPage(currentPage);
    }
  };
  const searchMovie = (e) => {
    e.preventDefault();
    setSearch({ ...search });
    console.log("====================================");
    console.log(search);
    console.log("====================================");
  };
  return (
    <>
      <div className="container mt-5">
        <button className="btn btn-success float-end" onClick={changLang}>
          {" "}
          {lang == "en-US" ? "English" : "Arabic"}{" "}
        </button>

        <div class="row justify-content-center">
          <div class="col-12 col-md-10 col-lg-8">
            <form class="card card-sm">
              <div class="card-body row no-gutters align-items-center">
                <div class="col-auto">
                  <i class="fas fa-search h4 text-body"></i>
                </div>
                {/* <div class="col">
                  <input
                    class="form-control form-control-lg form-control-borderless"
                    value={search}
                    placeholder="What are you looking for"
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>

                <div class="col-auto">
                  <button
                    class="btn btn-lg btn-success"
                    type="submit"
                    onSubmit={searchMovie}
                  >
                    Search
                  </button>
                </div> */}
                <Form>
                  <Form.Group className="mb-3 d-flex">
                    <Form.Control
                      type="text"
                      placeholder="Search Movies"
                      className="rounded-0"
                      value={search}
                      onChange={(e) => {
                        setSearch(e.target.value);
                      }}
                    />
                  </Form.Group>
                </Form>
              </div>
            </form>
          </div>
        </div>

        <div className="row justify-content-center">
          {alltvs.map((tv) => (
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
                <Link to={`/tvdetails/${tv.id}`} className="btn btn-success">
                  See Movie Details
                </Link>
                {/* <Link to={`/TvDetails/${tv.id}`}>See ?details</Link> */}
              </div>
            </div>
          ))}
          ;
        </div>
      </div>
      <ul className="pagination justify-content-end">
        <li className="page-item">
          <button
            className="btn btn-primary"
            aria-label="Previous"
            onClick={showPrev}
            disabled={page == 1 ? true : false}
          >
            <span className="sr-only">Previous</span>
          </button>
        </li>
        <li className="page-item">
          <button
            className="btn btn-primary"
            aria-label="Next"
            onClick={showNext}
            disabled={page == totalPages ? true : false}
          >
            <span className="sr-only">Next</span>
          </button>
        </li>
      </ul>
    </>
  );
}

export default TvShow;
