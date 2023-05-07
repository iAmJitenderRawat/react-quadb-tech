import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../components/AuthContext";
import { useContext } from "react";

const Login = () => {
  const arrUsers = JSON.parse(localStorage.getItem("usersLS")) || [];
  const { isAuth, setAuth } = useContext(AuthContext);

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleClick = () => {
    if (arrUsers.length === 0) {
      alert("User not found");
    }

    if (arrUsers.length === 1) {
      if (
        arrUsers[0].email === userData.email &&
        arrUsers[0].password === userData.password
      ) {
        alert("Login Successfull");
        localStorage.setItem("userDataLS", JSON.stringify(arrUsers));
        setAuth(true);
        console.log(isAuth);
      } else {
        alert("Invalid email or password");
      }
    }

    if (arrUsers.length > 1) {
      const found = arrUsers.filter((element) => {
        return (
          element.email === userData.email 
        );
      });
      if(found.length===0){
        alert("User not found")
      }
      console.log("found", found);
      if (
        found[0].email === userData.email &&
        found[0].password === userData.password
      ) {
        alert("Login Successfull");
        localStorage.setItem("userDataLS", JSON.stringify(found[0]));
        setAuth(true);
        console.log(isAuth);
      }else {
        alert("Invalid email or password");
      }
    }
    // if (arrUsers.length > 0) {
    //   arrUsers.forEach((element) => {
    //     if (
    //         element.email === userData.email &&
    //         element.password === userData.password
    //       )
    //      {
    // alert("Login Successfull");
    // localStorage.setItem("userDataLS", JSON.stringify(element));
    // setAuth(true);
    // console.log(isAuth);

    //     }
    //   });
    // }
  };
  console.log("arrUsers", arrUsers);
  console.log("userData", userData);

  return (
    <main className="w-50 m-auto p-5">
      <p className="text-center">
        Registeration and login is mandatory to book all shows
      </p>
      <h1 className="text-center">Login</h1>
      <form>
        {/* <!-- Email input --> */}
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form2Example1">
            Email address
          </label>
          <input
            type="email"
            id="form2Example1"
            className="form-control"
            name="email"
            onChange={handleChange}
            required
          />
        </div>

        {/* <!-- Password input --> */}
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form2Example2">
            Password
          </label>
          <input
            type="password"
            id="form2Example2"
            className="form-control"
            name="password"
            onChange={handleChange}
            required
          />
        </div>

        {/* <!-- 2 column grid layout for inline styling --> */}
        <div className="row mb-4">
          <div className="col d-flex justify-content-center">
            {/* <!-- Checkbox --> */}
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="form2Example34"
                required
              />
              <label className="form-check-label" htmlFor="form2Example34">
                {" "}
                Remember me{" "}
              </label>
            </div>
          </div>

          <div className="col">
            {/* <!-- Simple link --> */}
            <a href="#!">Forgot password?</a>
          </div>
        </div>

        {/* <!-- Submit button --> */}
        <button
          type="button"
          className="btn btn-primary btn-block mb-4"
          onClick={handleClick}
          disabled={isAuth}
        >
          Login
        </button>

        {/* <!-- Register buttons --> */}
        <div className="text-center">
          <p>
            Not a member? <Link to="/register">Register</Link>
          </p>
        </div>
      </form>
    </main>
  );
};

export default Login;
