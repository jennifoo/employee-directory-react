import React from "react";

function Col(props) {
  const size = props.size.split(" ").map(size => "col-" + size).join(" ");

  return <div className={size}>{props.children}</div>;
  // return <div className="col">{props.children}</div>;
}

export default Col;
