import React from "react";
import { ListRoot, ListItem, ListCol } from "../List";
import TrackVisibility from "react-on-screen";
import "./styles.css";

const SkillLevel = ({ data }) => {
  return (
    <ListRoot>
      {data
        .trim()
        .split("\n")
        .map((item) => item.replace(/^\*[ ]*/, ""))
        .map((line, indexLine) => {
          let parts = line.split("|");

          return (
            <ListItem key={indexLine}>
              <ListCol column={0}>{parts[1]}</ListCol>
              <ListCol column={1}>
                <span className="skillevel__level">
                  <span
                    className="skillevel__level-inner"
                    style={{
                      width: `${parseInt(parts[0])}%`,
                    }}
                  >
                    <TrackVisibility tag="span" once={true}>
                      {({ isVisible }) => (
                        <span
                          className="skillevel__level-fill"
                          style={{
                            width: `${isVisible ? 100 : 0}%`,
                          }}
                        />
                      )}
                    </TrackVisibility>
                  </span>
                </span>
              </ListCol>
            </ListItem>
          );
        })}
    </ListRoot>
  );
};

export default SkillLevel;
