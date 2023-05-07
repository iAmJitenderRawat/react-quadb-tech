import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { signUpSchema } from "../schema/signUpSchema";

const Register = () => {
  const arrUsers = JSON.parse(localStorage.getItem("usersLS")) || [];
  const [users, setUsers] = useState(arrUsers);
  const [button, setButton] = useState(false);
const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
  useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      if (users.length === 0) {
          setUsers([...users, values]);
          setButton(!button);
          alert("Sign Up Successfull");
      }
      if (users.length > 0) {
         users.forEach((ele) => {
            if (ele.email === values.email) {
              alert("User already exist.");
            }else{
              setUsers([...users, values]);
              setButton(!button);
              alert("Sign Up Successfull");
            }
          })
      }
    },
  });
localStorage.setItem("usersLS", JSON.stringify(users));

  return (
    <main className="w-80 m-auto p-5 ">
      <p className="text-center">Registeration and login is mandatory to book all shows</p>
      <h1 className="text-center">Register</h1>
      <form onSubmit={handleSubmit}>
        {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
        <div className="row mb-4">
          <div className="col">
            <div className="form-outline">
              <label className="form-label" htmlFor="form3Example1">
                First name
              </label>
              <input
                type="text"
                id="form3Example1"
                className="form-control"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {errors.firstName && touched.firstName ? (
                <p className="text-danger">{errors.firstName}</p>
              ) : null}
            </div>
          </div>
          <div className="col">
            <div className="form-outline">
              <label className="form-label" htmlFor="form3Example2">
                Last name
              </label>
              <input
                type="text"
                id="form3Example2"
                className="form-control"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {errors.lastName && touched.lastName ? (
                <p className="text-danger">{errors.lastName}</p>
              ) : null}
            </div>
          </div>
        </div>

        {/* <!-- Email input --> */}
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form3Example3">
            Email address
          </label>
          <input
            type="email"
            id="form3Example3"
            className="form-control"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.email && touched.email ? (
            <p className="text-danger">{errors.email}</p>
          ) : null}
        </div>

        {/* <!-- Password input --> */}
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form3Example4">
            Password
          </label>
          <input
            type="password"
            id="form3Example4"
            className="form-control"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.password && touched.password ? (
            <p className="text-danger">{errors.password}</p>
          ) : null}
        </div>

        {/* <!-- Checkbox --> */}
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

        {/* <!-- Submit button --> */}
        <button type="submit" className="btn btn-primary btn-block mb-4" disabled={button}>
          Register
        </button>

        {/* <!-- Register buttons --> */}
        <div className="text-center">
          Already a member <Link to={"/login"}>Login</Link>
        </div>
      </form>
    </main>
  );
};

export default Register;
