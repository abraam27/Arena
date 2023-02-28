import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Navigate, Route, Routes } from "react-router";
import Landing from "../Components/Landing/Landing";
import Registration from "../Components/Registration/Registration";
import Login from "../Components/Login/Login";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import OwnerProfile from "../Components/Owner Profile/OwnerProfile";

function App() {
  let [loggedInUser, setloggedInUser] = useState(null);
  // const Navigate = useNavigate();

  function getLoginUser() {
    let encodedToken = localStorage.getItem("userToken");//Get the localStorage item by key
    let userData = jwtDecode(encodedToken);
    setloggedInUser(userData);// Hena ana bamla el loggedInUser de we msh hattmly gher law fee token
  }

  function logOut() {
    localStorage.removeItem("userToken");//Remove the token from Local Storage
    setloggedInUser(null);//Change the state to null again
  }

  // UseEffect will work after the App()
  useEffect(() => { //I used the useEffect to check that the token is still avaliable when I reload my Site
    if (localStorage.getItem("userToken")) {//Check for LocalStorage if the userToken is avaliable in it
      getLoginUser();//So call this function
    }
  }, [])



  return (
    <BrowserRouter>
      <Navbar loggedInUser={loggedInUser} logOut={logOut} />

      <div className="MyBody">
        {/* <ProtectedRoute to='/owner-profile' element={OwnerProfile} loggedInUser={loggedInUser} ></ProtectedRoute> */}

        <Routes>

          <Route path="/" element={<Landing loggedInUser={loggedInUser} />} />
          <Route path="/home" element={<Landing loggedInUser={loggedInUser} />} />
          <Route path="/login" element={<Login getLoginUser={getLoginUser} />} />
          <Route path="/register" element={<Registration />} />
          {localStorage.getItem("userToken") ? <Route path="/owner-profile" element={<OwnerProfile />} /> :
            <>
            <Route path="/owner-profile" element={<Navigate to="/login" />} />
            
            </>
          }


        </Routes>
      </div>
      <Footer />
    </BrowserRouter>

  );
}

export default App;

//Tik app above
/////////////////////////////////////////////////
