import React from "react";
import ReactDOM from "react-dom";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { Corkboard } from "./components/Corkboard";
// import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    {/* IMPORTANT: this is where we enable react-dnd for our entire app. There is also a touch backend. */}
    <DndProvider backend={HTML5Backend}>
      <Corkboard />
    </DndProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals((vitals) => {
//   console.groupCollapsed("Web Vitals");
//   console.info(vitals);
//   console.groupEnd();
// });
