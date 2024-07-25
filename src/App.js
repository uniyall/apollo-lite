import Input from "./components/Input";
import DropDown from "./components/DropDown";
import TickerContext from "./utils/tickerContext";
import PillsContext from "./utils/pillsContext";
import PillsContainer from './components/PillsContainer'
import { useState } from "react";

function App() {
  const [tickerData, setTickerData] = useState([]);
  const [pillsData, setPillsData] = useState([]);

  return (
    <TickerContext.Provider
      value={{
        tickerData,
        setTickerData,
      }}
    >
      <PillsContext.Provider
        value={{
          pillsData,
          setPillsData,
        }}
      >
        <div className="flex flex-column w-3/4 p-7 mx-auto">
          <Input />
          <DropDown />
          <PillsContainer />
        </div>
      </PillsContext.Provider>
    </TickerContext.Provider>
  );
}

export default App;
