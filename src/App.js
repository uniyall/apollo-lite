import Input from "./components/Input";
import DropDown from "./components/DropDown";
import TickerContext from "./utils/tickerContext";
import { useState } from 'react';

function App() {

  const [tickerData, setTickerData] = useState([]);

  return (
    <TickerContext.Provider value={{
      tickerData, 
      setTickerData
    }}>
      <div className="flex flex-column w-3/4 p-7 mx-auto">
        <Input />
        <DropDown />
      </div>
    </TickerContext.Provider>
  );
}

export default App;
