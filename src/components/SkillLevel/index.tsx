import { ListRoot, ListItem, ListCol } from "../List";
import "./styles.css";

interface SkillLevelProps {
  data: string;
}

const SkillLevel: React.FC<SkillLevelProps> = ({ data }) => {
  return (
    <ListRoot className="">
      {data
        .trim()
        .split("\n")
        .map((item: string) => item.replace(/^\*[ ]*/, ""))
        .map((line: string, indexLine: number) => {
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
                    <span className="skillevel__level-fill" />
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
