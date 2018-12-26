import React from "react";
import "./styles.css";

import Mark from "react-mark-ii";

const options = {
  "*": { renderer: "strong" },
  "~": { renderer: ({ children }) => <span className="small">{children}</span> }
};

export const ListRoot = ({ children }) => (
  <div className="list">
    <ul>{children}</ul>
  </div>
);

export const ListItem = ({ children }) => (
  <li className="list--li">{children}</li>
);

export const ListCol = ({ column, children }) => (
  <span className={`list--col_${column}`}>{children}</span>
);

const List = ({ children }) => {
  return (
    <ListRoot>
      {children.split("\n* ").splice(1).map(line => (
        <ListItem>
          {line.split("|").map((item, index) => {
            return (
              <ListCol column={index}>
                <Mark options={options}>{item}</Mark>
              </ListCol>
            );
          })}
        </ListItem>
      ))}
    </ListRoot>
  );
};

export default List;
