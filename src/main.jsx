import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.jsx";
import "./styles.css"; // Assuming you have a styles.css for global styles

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);