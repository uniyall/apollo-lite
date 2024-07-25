import { useContext } from "react";
import PillsContext from "../utils/pillsContext";
import Pill from "./Pill";

const PillContainer = () => {
  const pills = useContext(PillsContext);
  if (pills.pillsData.length == 0) {
    return <div> Loading</div>;
  } else {
    return (
      <div>
        {pills.pillsData.map((data) => {
          <Pill name={data} />;
        })}
      </div>
    );
  }
};

export default PillContainer;
