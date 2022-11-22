import React from "react";
import { Accordion } from "../ui/components/1-atoms/Accordion/Accordion";
import { accordionData } from "../data/content.js";
import Styletile from "../ui/components/6-pages/Styletile/Styletile";
import "../ui/styles/globals.scss";

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <Styletile />
      <Accordion data={accordionData} />
    </div>
  );
}

export default App;
