import React from "react";
import "./styles.css";

import Mark from "react-mark-ii";


const options = {
    '*': {renderer: 'strong'},
    '~': {renderer: ({children}) => <span className="small">{children}</span>}
};

const List = ({ children }) => {
  return (
    <div className="list">
      <ul>
        {children
          .split("\n* ")
          .map(line => (
            <li className="list--li">
              {line.split("|").map((item, index) => {
                return (
                  <span className={`list--col_${index}`}>
                    <Mark options={options}>{item}</Mark>
                  </span>
                );
              })}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default List;
