import React from "react";
import ReactDOM from "react-dom/client";
import Quotes from "./Quotes";

const App = () => {
  return (
    <div style={{
        margin: 30,
        fontSize: "32px",
        textAlign: "center",
        border: "1px solid white", 
      }}>
      <Quotes />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
