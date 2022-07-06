import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css"; 
import "bootstrap/dist/js/bootstrap.js";
import "./css/landing-index.css";
import "./css/contact-login-register-password.css"
import "./css/user.css"
import "./css/recipe.css"
import "./css/user-side-nav.css"
import "./css/multi-use.css"
import "./css/settings.css"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
