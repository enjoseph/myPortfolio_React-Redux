import React from "react";
import ReactDOM from "react-dom/client";

// Import Index
import "./index.css";

// Router
import  {PagesRouting}  from "./routes";
import { BrowserRouter } from "react-router-dom";

// Redux
import store from "./stores/store";
import { Provider } from "react-redux";

// i18next
import "./i18n";



function initialize() {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <BrowserRouter>
      <Provider store={store}>
        <PagesRouting/>
      </Provider>
    </BrowserRouter>
  );
}

initialize();
