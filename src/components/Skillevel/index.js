import React from "react";
import { ListRoot, ListItem, ListCol } from "../List";
import "./styles.css";

const Skillevel = ({ data, showHeader }) => {
  return (
    <ListRoot>
      {showHeader && (
        <ListItem>
          <span className="skill--basic">
            <span className="skill--label">Basic</span>
          </span>
          <span className="skill--pro">
            <span className="skill--label">Professional</span>
          </span>
          <span className="skill--advanced">
            <span className="skill--label">Advanced</span>
          </span>
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
                <span className="list--col_0--inner">{parts[1]}</span>
              </ListCol>

              <ListCol column={1}>
                <span className="list--col_1--inner">
                  <span
                    style={{
                      marginTop: "0.4rem",
                      height: "0.5rem",
                      width: "100%",
                      backgroundColor: "#ddd",
                      display: 'block'
                    }}
                  >
                    <span
                      style={{
                        height: "100%",
                        width: `${parseInt(parts[0])}%`,
                        backgroundColor: "#004b5f",
                        display: 'block'
                      }}
                    />
                </span>
                </span>
              </ListCol>
            </ListItem>
          );
        })}
    </ListRoot>
  );
};

export default Skillevel;
