import React from "react";
import { ListRoot, ListItem, ListCol } from "../List";
import TrackVisibility from "react-on-screen";
import "./styles.css";

const Skillevel = ({ data }) => {
  return (
    <ListRoot>
      {data
        .trim()
        .split("\n")
        .map(item => item.replace(/^\*[ ]*/, ""))
        .map((line, indexLine) => {
          let parts = line.split("|");

          return (
            <ListItem key={indexLine}>
              <ListCol column={0}>
                <span className="list--col_0--inner">{parts[1]}</span>
              </ListCol>

              <ListCol column={1}>
                <div className="list--col_1--inner">
                  <div
                    style={{
                      marginTop: "0.4rem",
                      height: "0.5rem",
                      width: "100%",
                      backgroundColor: "#ddd",
                      display: "block"
                    }}
                  >
                    <TrackVisibility once={true}>
                      {({ isVisible }) => (
                        <div
                          className="list--col_1--level"
                          style={{
                            height: "0.5rem",
                            width: `${isVisible ? parseInt(parts[0]) : 0}%`,
                            backgroundColor: "#004b5f",
                            display: "block"
                          }}
                        />
                      )}
                    </TrackVisibility>
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
