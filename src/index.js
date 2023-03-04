import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import App from "./App/App";
import Landing from "./Components/Landing/Landing";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Components/Login/Login";
import Registration from "./Components/Registration/Registration";
import OwnerProfile from "./Components/Owner Profile/OwnerProfile";
import DiscoverCourts from "./Components/Discover-Courts/DiscoverCourts";
import CourtDetails from "./Components/courtDetails/CourtDetails";
import MyFields from "./Components/Owner Profile/MyFields";
import jwtDecode from "jwt-decode";
import { useEffect,useState } from "react";
import Navbar from "./Components/Navbar/Navbar";

import store from "./Redux/Store"
import { Provider } from "react-redux";
import { routeProtectionLoader } from "./Components/Owner Profile/OwnerProfile";
import { discoverFieldsLoader } from "./Components/Discover-Courts/DiscoverCourts";

import OwnerRegistration from "./Components/Owner Registration/OwnerRegistration";

const routes = createBrowserRouter([
  {
    path: "/",

    element: <App />,

    children: [
      {
        path: "/",
        element: <Landing />,
        
      },
      {
        path: "/home",
        element: <Landing />,
      },
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Registration></Registration> },
      {
        path: "/owner-profile",
        element: <OwnerProfile></OwnerProfile>,
        loader: routeProtectionLoader,
      },
      {
        path: "/discover",
        element: <DiscoverCourts></DiscoverCourts>,
        loader: discoverFieldsLoader,
      },
      
      { path: "/court-details", element: <CourtDetails></CourtDetails> },
      { path: "/my-fields", element: <MyFields></MyFields> },
      { path: "/owner-register", element: <OwnerRegistration></OwnerRegistration> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(

  // <React.StrictMode>
    
    <Provider store={store}>
      
    <RouterProvider router={routes}  />
    </Provider>
  // </React.StrictMode>
);
