import React, { useEffect } from "react";
import AppHeader from "./components/AppHeader";
import useInitAxios from "./hooks/useInitAxios";
import LandingPage from "./pages/LandingPage";

const App = () => {

  useInitAxios(); // init axios

  return (
    <>
      <div className="flex flex-col">
          <AppHeader logoWhite={true} />
          <LandingPage/>
      </div>
    </>
  );
};

export default App;
