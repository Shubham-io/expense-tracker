import React from "react";
import Header from "./components/Header";
import History from "./components/History";
import AddTransaction from "./components/AddTransaction";
import { GlobalContext } from "./context/GlobalContext";

const App = () => {
  return (
    <GlobalContext>
      <div className="w-full  bg-gray-100 md:w-1/3 flex flex-col py-2  mx-auto">
        <Header />
        <History />
        <AddTransaction />
      </div>
    </GlobalContext>
  );
};

export default App;
