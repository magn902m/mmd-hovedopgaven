import React from "react";
import { Button } from "../ui/components";
import "../ui/styles/globals.scss";

function App() {
  return (
    <div className="App">
      <h1>Hej</h1>
      <Button
        size={"large"}
        label={"Click on me"}
        onClick={() => {
          console.log("you clicked me");
        }}
      />
    </div>
  );
}

export default App;
