import React from "react";
import "./styles.css";
import Markdown from "../Markdown/";

// Root component of the component
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

// Function to split a string at the first occurence of a separator
const splitAtFirstSeparator = (str, separator) => {
  const index = str.indexOf(separator);
  if (index === -1) {
    return [str];
  }
  return [str.slice(0, index), str.slice(index + 1)];
};

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
            {splitAtFirstSeparator(line, "|").map((item, index) => {
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
