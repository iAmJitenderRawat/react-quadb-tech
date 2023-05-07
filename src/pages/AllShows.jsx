import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { STATUSES, getShows } from "../slices/showsSlice";

const AllShows = () => {
  const { data: showsData, status } = useSelector((state) => state.shows);
  const dispatch = useDispatch();

 useEffect(() => {
   dispatch(getShows());
 }, [dispatch]);

  if (status === STATUSES.LOADING) {
    return (
      <div className="m-20">
        <h2 className="text-center">Loading....</h2>
      </div>
    );
  }

  if (status === STATUSES.ERROR) {
    return (
      <div>
        <h1>ERROR 404</h1>
        <h2>Something went wrong!</h2>
      </div>
    );
  }
  return (
    <div className="w-80 m-auto p-5">
      <h1 className="text-center">All Shows</h1>
      <main id="grid">
        {showsData &&
          showsData.map((data, i) => {
            return (
              <div className="card text-center" key={data.show.id}>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to={`/shows/${data.show.id}`}
                >
                  <img
                    className="card-img-top h-80 img-fluid"
                    src={
                      data.show.image?.medium ||
                      "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
                    }
                    alt={data.show.name}
                  />
                  <div>
                    <h3>Name: {data.show.name}</h3>
                    <h4>Genres: {data.show.genres.join(", ")}</h4>
                    <h4>Rating: {data.show.rating.average || "N.A."}</h4>
                    <button className="btn btn-danger w-25 m-auto mb-3">
                      Book
                    </button>
                    <p>Available in {data.show.language} language.</p>
                  </div>
                </Link>
              </div>
            );
          })}
      </main>
    </div>
  );
};

export default AllShows;
