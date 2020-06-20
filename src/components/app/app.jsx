import React from "react";
import "./app.less";
import Windows from "../windows/windows";
import Header from "../header/header";


const App = () => {
  return (
    <React.Fragment>
      <Header/>
      <Windows/>
    </React.Fragment>
  );
};

export default App;
