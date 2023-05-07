import { Link } from "react-router-dom";
import style from "../styles/Navbar.module.css";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

const Navbar = () => {
  const { isAuth, setAuth } = useContext(AuthContext);
  return (
    <header className={style.nav}>
      <Link className={style.link} to={"/"}>
        <h1>Movie App</h1>
      </Link>
      <Link to="/shows">
        <h3>All Shows</h3>
      </Link>
      {isAuth && isAuth ? (
        <button className="btn btn-light" onClick={(isAuth)=>setAuth(!isAuth)}>Logout</button>
      ) : (
        <Link to={"/register"}>
          <button className="btn btn-light">Register</button>
        </Link>
      )}
    </header>
  );
};

export default Navbar;
