import axios from "axios";
import React, { useEffect } from "react";
import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";
import AppHome from "./components/home/AppHome";


import Temp from "./temp";

let haveInit = false;
const initApp = () => {
  if (haveInit) return;
  console.log("init app");

  // axios
  axios.defaults.baseURL = import.meta.env.VITE_BE_URL;
  axios.defaults.headers.post["Content-Type"] = "application/json";

  haveInit = true;
};

const App = () => {

  useEffect(()=> initApp(), []); // init app

  return (
    <>
      <div className="w-98vw flex flex-col">
          <AppHeader />
          <AppHome />
        <AppFooter />
      </div>
    </>
  );
};

export default App;
