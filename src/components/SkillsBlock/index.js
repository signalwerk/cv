import React from "react";
import { ListRoot, ListItem } from "../List";
import "./styles.css";

const Skills = ({ children }) => {
  return (
    <div>
      <ListRoot className="skills">
        <ListItem>
          <span className="skills--basic">
            <span className="skills--label">Basic</span>
          </span>
          <span className="skills--pro">
            <span className="skills--label">Professional</span>
          </span>
          <span className="skills--advanced">
            <span className="skills--label">Advanced</span>
          </span>
        </ListItem>
      </ListRoot>
      {children}
    </div>
  );
};

export default Skills;
