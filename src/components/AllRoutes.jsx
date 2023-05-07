import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AllShows from "../pages/AllShows";
import SingleShow from "../pages/SingleShow";
import NotFound from "../pages/NotFound";
import Register from "../pages/Register";
import Login from "../pages/Login";
import { PrivateRoute } from "./PrivateRoute";
import Book from "../pages/Book";


const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/shows"
        element={
          <PrivateRoute>
            <AllShows />
          </PrivateRoute>
        }
      />
      <Route
        path="/shows/:id"
        element={
          <PrivateRoute>
            <SingleShow />
          </PrivateRoute>
        }
      />
      <Route
        path="/book/:id"
        element={
          <PrivateRoute>
            <Book />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AllRoutes;
