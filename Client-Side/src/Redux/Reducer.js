import { useEffect, useState } from "react";
import axios from "axios";
const initialState = null;

let res;

const reducer = (state = initialState, action) => {

  if (action) {
    switch (action.type) {
      case "setLoggedInUser":
        // console.log("dfdf");
        return action.payload;
      default:
        return state;
    }
  }
};
export default reducer;
