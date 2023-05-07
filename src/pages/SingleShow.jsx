import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getSingleShow, STATUSES } from "../slices/singleShowSlice";

const SingleShow = () => {
  const { data: showData, status } = useSelector((state) => state.singleShow);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getSingleShow(id));
  }, [dispatch, id]);

  if (status === STATUSES.LOADING) {
    return (
      <div className="m-20">
        <h2 className="text-center mt-50 mb-50">Loading....</h2>
      </div>
    );
  }

  if (status === STATUSES.ERROR) {
    return (
      <div className="text-center">
        <h1>ERROR 404</h1>
        <h2>Something went wrong!</h2>
      </div>
    );
  }
  return (
    <main className="w-75 m-10 mx-auto">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          margin: "18px",
        }}
      >
        <img
          style={{ height: "85vh" }}
          src={
            showData?.image?.original ||
            "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
          }
          alt={showData.name}
        />
        <div className="m-3">
          <h1>Name: {showData?.name}</h1>
          <h3>Type: {showData?.type || "N.A."}</h3>
          <h3>Rating: {showData.rating?.average || "N.A."}</h3>
          <h2>Summary</h2>
          <p className="fs-5 fw-light">
            {showData?.summary?.replace(/<\/?[^>]+>/gi, "")}
          </p>
          <Link to={`/book/${showData?.id}`}>
            <button className="btn btn-danger px-5">Book</button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default SingleShow;
