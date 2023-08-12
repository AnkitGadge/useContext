import React, { useState } from "react";
import "./App.css";


import FunctionContextComponent from "./FunctionContextComponent";
import { ThemeProvider } from "./ThemeContext";
export const ThemeContext = React.createContext();

function App() {
  return (
    <div>
      <ThemeProvider>
        <FunctionContextComponent />
      </ThemeProvider>
    </div>
  );
}

export default App;
