import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Task from "./Component/Task.jsx";

class App extends Component {
  
  render() {
    
    return (
      <React.Fragment>
        
        <Routes>
          
          <Route path="/" element={<Task />} />
        
        </Routes>
        
      </React.Fragment>
    );
  }
}

export default App;
