import { useContext, useState, useEffect } from "react";
import TickerContext from "../utils/tickerContext";

const DropDown = () => {
  const tickerData = useContext(TickerContext);
  const [tickers, setTickers] = useState([]);

  // useEffect(() => {

  // }, [])

  console.log(tickerData.tickerData);
  return tickerData.tickerData.length == 0 ? (
    <h4 className="text-black">Loading...</h4>
  ) : (
    <div className="flex flex-col">
      {tickerData.tickerData?.results?.map((data) => (
          <div className="bg-yellow-100 m-5">{data?.name}</div>
      ))}
    </div>
  );
};

export default DropDown;
