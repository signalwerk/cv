import React from "react";
import "./styles.css";

const Skillevel = ({ score, name }) => (
  <div className="list--li">

    <span className="list--col_0">{name}</span>

    <span className="list--col_1">
      <div style={{ marginTop: "0.4rem", height: "0.7rem", width: "100%", backgroundColor: "#ddd" }}>
        <div style={{ height: "100%", width: `${score}%`, backgroundColor: "#004b5f" }} />
      </div>
    </span>
  </div>
);

export default Skillevel;
