import React from "react";


function Jumbotron(props) {
  return (
    <div
      style={{ clear: "both", paddingTop: 50, textAlign: "center", ...props.style }} 
      className="jumbotron"
    >
     {props.children}
    </div>
  );
}

export default Jumbotron;