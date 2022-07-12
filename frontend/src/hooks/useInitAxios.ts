
import axios from 'axios';
import React, { useEffect } from 'react'

let haveInit = false;
const initApp = () => {
  if (haveInit) return;
  console.log("init axios with backend");

  // axios
  axios.defaults.baseURL = import.meta.env.VITE_BE_URL;
  axios.defaults.headers.post["Content-Type"] = "application/json";

  haveInit = true;
};

const useInitAxios = () => {
    useEffect(()=> initApp(), []); // init app
}

export default useInitAxios