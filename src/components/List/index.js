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

const List = ({ data }) => {
  return (
    <ListRoot>
      {data
        .trim()
        .split("\n")

        .map(item => item.replace(/^\*[ ]*/, ""))
        .map(line => (
          <ListItem>
            {line.split("|").map((item, index) => {
              return (
                <ListCol column={index}>
                  <div className={`list--col_${index}--inner`}>
                    <Mark options={options}>{item}</Mark>
                  </div>
                </ListCol>
              );
            })}
          </ListItem>
        ))}
    </ListRoot>
  );
};

export default List;
