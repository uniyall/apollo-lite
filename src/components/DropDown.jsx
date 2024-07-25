import { useContext, useState, useEffect } from "react";
import TickerContext from "../utils/tickerContext";
import PillsContext from "../utils/pillsContext";

const DropDown = () => {
  const tickerData = useContext(TickerContext);
  const pills = useContext(PillsContext);

  return tickerData.tickerData.length == 0 ? (
    <h4 className="text-black">Loading...</h4>
  ) : (
    <div className="flex flex-col">
      {tickerData.tickerData?.results?.map((data) => (
        <button
          onClick={(e) => {
            const copy = pills.pillsData;
            copy.push(data?.name);
            pills.setPillsData(copy)
          }}
          className="bg-yellow-100 m-5"
        >
          {data?.name}
        </button>
      ))}
    </div>
  );
};

export default DropDown;
