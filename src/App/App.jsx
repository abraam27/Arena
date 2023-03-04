import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { useEffect } from "react";
import jwtDecode from "jwt-decode";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function App() {
  // let [loggedInUser, setloggedInUser] = useState(null);
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state);
  // console.log(myReduxData);

  // function getLoginUser() {
  //   let encodedToken = localStorage.getItem("userToken"); //Get the localStorage item by key
  //   let userData = jwtDecode(encodedToken);
  //   setloggedInUser(userData); // Hena ana bamla el loggedInUser de we msh hattmly gher law fee token
  // }

  // function logOut() {
  //   localStorage.removeItem("userToken"); //Remove the token from Local Storage
  //   setloggedInUser(null); //Change the state to null again
  // }

  // UseEffect will work after the App()
  useEffect(() => {
    //I used the useEffect to check that the token is still avaliable when I reload my Site
    if (localStorage.getItem("userToken")) {
      // console.log("there is user");

      let encodedToken = localStorage.getItem("userToken"); //Get the localStorage item by key
      let userData = jwtDecode(encodedToken);

      dispatch({ type: "setLoggedInUser", payload: userData });
    }
  }, []);

  return (
    <>
      <Navbar loggedInUser={loggedInUser}></Navbar>
      <div className="MyBody">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>

    // <BrowserRouter>
    //   <Navbar loggedInUser={loggedInUser} logOut={logOut} />

    //   <div className="MyBody">
    //     {/* <ProtectedRoute to='/owner-profile' element={OwnerProfile} loggedInUser={loggedInUser} ></ProtectedRoute> */}

    //     <Routes>

    //       <Route path="/" element={<Landing loggedInUser={loggedInUser} />} />
    //       <Route path="/home" element={<Landing loggedInUser={loggedInUser} />} />
    //       <Route path="/login" element={<Login getLoginUser={getLoginUser} />} />
    //       <Route path="/register" element={<Registration />} />
    //       {localStorage.getItem("userToken") ? <Route path="/owner-profile" element={<OwnerProfile />} /> :
    //         <>
    //         <Route path="/owner-profile" element={<Navigate to="/login" />} />

    //         </>
    //       }
    //       <Route path="/discover" element={<DiscoverCourts />} />
    //       <Route path="/courtDetails" element={<CourtDetails />} />
    //       <Route path="/myFields" element={<MyFields />} />

    //     </Routes>
    //   </div>
    //   <Footer />
    // </BrowserRouter>
  );
}

export default App;

// export function loaderrr() {
//   console.log("loader");
//   return loggedInUser;
// }
