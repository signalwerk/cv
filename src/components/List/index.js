import React from "react";
import "./styles.css";
import Markdown from "../Markdown/";

// const options = {
//   "*": { renderer: "strong" },
//   "~": {
//     renderer: ({ children }) => <span className="small">{children}</span>,
//   },
// };

export const ListRoot = ({ className, children }) => (
  <div className={`list${className ? ` ${className}` : ""}`}>
    <ul>{children}</ul>
  </div>
);

export const ListItem = ({ className, children }) => (
  <li className={`list--li${className ? ` ${className}` : ""}`}>{children}</li>
);

export const ListCol = ({ column, children, noInner = false }) => (
  <span className={`list--col_${column}`}>
    {noInner ? (
      children
    ) : (
      <span className={`list--col_${column}--inner`}>{children}</span>
    )}
  </span>
);

const List = ({ data }) => {
  return (
    <ListRoot>
      {data
        .trim()
        .split("\n")
        // remove asterisk (*) at the beginning of the line
        .map((item) => item.replace(/^\*[ ]*/, ""))
        .map((line, indexLine) => (
          <ListItem key={indexLine}>
            {line.split("|").map((item, index) => {
              return (
                <ListCol column={index} key={index}>
                  <Markdown text={item} />
                </ListCol>
              );
            })}
          </ListItem>
        ))}
    </ListRoot>
  );
};

export default List;
