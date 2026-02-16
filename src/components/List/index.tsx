import "./styles.css";
import Markdown from "../Markdown/";

interface ListRootProps {
  className?: string;
  children: React.ReactNode;
}

interface ListItemProps {
  className?: string;
  children: React.ReactNode;
}

interface ListColProps {
  column: number;
  children: React.ReactNode;
  noInner?: boolean;
}

// Root component of the component
export const ListRoot: React.FC<ListRootProps> = ({ className, children }) => (
  <div className={`list${className ? ` ${className}` : ""}`}>
    <ul>{children}</ul>
  </div>
);

export const ListItem: React.FC<ListItemProps> = ({ className, children }) => (
  <li className={`list--li${className ? ` ${className}` : ""}`}>{children}</li>
);

export const ListCol: React.FC<ListColProps> = ({
  column,
  children,
  noInner = false,
}) => (
  <span className={`list--col_${column}`}>
    {noInner ? (
      children
    ) : (
      <span className={`list--col_${column}--inner`}>{children}</span>
    )}
  </span>
);

// Function to split a string at the first occurence of a separator
const splitAtFirstSeparator = (str: string, separator: string): string[] => {
  const index = str.indexOf(separator);
  if (index === -1) {
    return [str];
  }
  return [str.slice(0, index), str.slice(index + 1)];
};

interface ListProps {
  data: string;
}

const List: React.FC<ListProps> = ({ data }) => {
  return (
    <ListRoot className="">
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
