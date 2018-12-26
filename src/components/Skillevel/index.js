import React from "react";
import { ListItem, ListCol } from "../List";
import "./styles.css";

const Skillevel = ({ score, name }) => (
  <ListItem>
    <ListCol column={0}>
      <div className="list--col_0--inner">{name}</div>
    </ListCol>

    <ListCol column={1}>
      <div
        style={{
          marginTop: "0.4rem",
          height: "0.5rem",
          width: "100%",
          backgroundColor: "#ddd"
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${score}%`,
            backgroundColor: "#004b5f"
          }}
        />
      </div>
    </ListCol>
  </ListItem>
);

export default Skillevel;
