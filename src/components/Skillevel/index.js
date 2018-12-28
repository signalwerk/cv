import React from "react";
import { ListRoot, ListItem, ListCol } from "../List";
import "./styles.css";

const Skillevel = ({ data, showHeader }) => {
  return (
    <ListRoot>
      {showHeader && (
        <ListItem>
          <div className="skill--basic">
            <div className="skill--label">Basic</div>
          </div>
          <div className="skill--pro">
            <div className="skill--label">Professional</div>
          </div>
          <div className="skill--advanced">
            <div className="skill--label">Advanced</div>
          </div>
        </ListItem>
      )}

      {data
        .trim()
        .split("\n")
        .map(item => item.replace(/^\*[ ]*/, ""))
        .map(line => {
          let parts = line.split("|");

          return (
            <ListItem>
              <ListCol column={0}>
                <div className="list--col_0--inner">{parts[1]}</div>
              </ListCol>

              <ListCol column={1}>
                <div className="list--col_1--inner">
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
                        width: `${parseInt(parts[0])}%`,
                        backgroundColor: "#004b5f"
                      }}
                    />
                  </div>
                </div>
              </ListCol>
            </ListItem>
          );
        })}
    </ListRoot>
  );
};

export default Skillevel;
