import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { useLangInit } from "./lang/LangInit";

import "./assets/scss/main.scss";

const Main = () => {
  useLangInit();
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<Main />);
