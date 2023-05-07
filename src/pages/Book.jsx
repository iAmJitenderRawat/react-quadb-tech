import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSingleShow, STATUSES } from "../slices/singleShowSlice";

const Book = () => {
      const { data: showData, status } = useSelector(
        (state) => state.singleShow
      );
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
    <main className="w-75 mt-10 mx-auto d-flex justify-content-center gap-5">
      <section className="w-50 mt-10">
        <div className="card text-dark text-center">
          <img
            className="h-50"
            src={showData?.image?.medium}
            alt={showData?.name}
          />
          <h1>Name: {showData?.name}</h1>
          <h3>Type: {showData?.type || "N.A."}</h3>
          <h3>Rating: {showData.rating?.average || "N.A."}</h3>
        </div>
      </section>
      <section className="w-50">
        <div>
          <h1>Payment Method</h1>
        </div>
        <form>
          <div className="row mb-4">
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form3Example3">
                Name
              </label>
              <input
                type="text"
                id="form3Example3"
                className="form-control"
                name="name"
                required
              />
            </div>
            <div className="col">
              <div className="form-outline">
                <label className="form-label" htmlFor="form3Example1">
                  Card Number
                </label>
                <input
                  type="text"
                  id="form3Example1"
                  className="form-control"
                  name="cardNumber"
                  required
                />
              </div>
            </div>
            <div className="col">
              <div className="form-outline">
                <label className="form-label" htmlFor="form3Example2">
                  CVV
                </label>
                <input
                  type="text"
                  id="form3Example2"
                  className="form-control"
                  name="CVV"
                  required
                />
              </div>
            </div>
          </div>

          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form3Example4">
              Expiration Date
            </label>
            <input
              type="month"
              id="form3Example4"
              className="form-control"
              name="expirationDate"
              required
            />
          </div>

          <div className="form-check d-flex justify-content-center mb-4">
            <label className="form-check-label" htmlFor="form2Example33">
              <input
                className="form-check-input me-2"
                type="checkbox"
                value=""
                id="form2Example33"
                required
              />
              I have read and agree to the terms
            </label>
          </div>

          <button type="submit" className="btn btn-info btn-block mb-4">
            MAKE A PAYMENT
          </button>
        </form>
      </section>
    </main>
  );
}

export default Book