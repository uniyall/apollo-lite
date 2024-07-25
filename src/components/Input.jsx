import { useState, useEffect, useContext } from "react";
import TickerContext from '../utils/tickerContext';

const Input = () => {
  const [inputText, setInputText] = useState("");
  const tickerData = useContext(TickerContext);

  useEffect(() => {
    const fn = async () => {
      const dataJSON = await fetch(
        `https://api.polygon.io/v3/reference/tickers?ticker=${inputText}&active=true&limit=5&apiKey=${process.env.REACT_APP_POLYGON_API_KEY}`
      );
      const data = await dataJSON.json();
      tickerData.setTickerData(data)
    };
    fn();
  }, [inputText]);

  return (
    <div>
      <input
        className="border-black bg-slate-200 p-2"
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        value={inputText}
      />
    </div>
  );
};

export default Input;
