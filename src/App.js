import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Title from "./components/Title";

const App = () => {
  return (
    <div>
      <div className="flex h-[88px] border-b-[1px] border-[#DBDBDB]">
        <Title />
        {/* <Header /> */}
      </div>

      <Body />
    </div>
  );
};

export default App;
