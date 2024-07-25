import { createContext } from "react";

const TickerContext = createContext({
  tickerData: [],
  setTickerData: null,
});

export default TickerContext;
