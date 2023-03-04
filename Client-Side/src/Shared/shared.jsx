import jwtDecode from "jwt-decode";
import { useDispatch } from "react-redux";
// const dispatch =useDispatch()
function Test() {
    function getLoginUser() {
        let encodedToken = localStorage.getItem("userToken"); //Get the localStorage item by key
        let userData = jwtDecode(encodedToken);
        // dispatch({ type: "setLoggedInUser", payload: userData });
        console.log("worked")
        return userData
    }

    function logOut() {
        localStorage.removeItem("userToken"); //Remove the token from Local Storage
        //   setloggedInUser(null); //Change the state to null again
    }
    // export { getLoginUser, logOut };
}
export default Test