import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import Landing from "../Components/Landing/Landing";
import Registration from "../Components/Registration/Registration";
import Login from "../Components/Login/Login";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import OwnerProfile from "../Components/Owner Profile/OwnerProfile";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setloggedInUser] = useState({});

  // useEffect(() => {
  //   let encodedToken = localStorage.getItem("userToken");//Get the localStorage item by key
  //   let userData = jwtDecode(encodedToken);
  //   setloggedInUser(userData);
  // }, []);

  return (
    <BrowserRouter>
      <Navbar loggedIn={{ isLoggedIn, setIsLoggedIn }} />
      <div className="MyBody">
        <Routes>
          <Route
            path="/"
            element={
              <Landing
                loggedIn={{ isLoggedIn, setIsLoggedIn }}
                loggedInUser={loggedInUser}
              />
            }
          />
          <Route path="/home" element={<Landing />} />
          <Route
            path="/login"
            element={<Login loggedIn={{ isLoggedIn, setIsLoggedIn }} />}
          />
          <Route
            path="/register"
            element={<Registration loggedIn={{ isLoggedIn, setIsLoggedIn }} />}
          />
          <Route path="/owner-profile" element={<OwnerProfile />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
