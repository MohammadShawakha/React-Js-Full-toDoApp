import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./style.css";

import ListView from "./listView/listView.jsx";

function App() {
  return (
    <>
      <div className="bg">
        <ListView listTitle="To Do" />
      </div>
    </>
  );
}

export default App;
