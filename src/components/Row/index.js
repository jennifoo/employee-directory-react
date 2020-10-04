import React from "react";

function Row(props) {
  let color = "row " + props.color
  return <div className={color}>{props.children}</div>;
}

export default Row;
