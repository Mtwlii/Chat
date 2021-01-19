import React from "react";
import "./App.css";
import "./components/Chatting";
import Chatting from "./components/Chatting";
///////start/////////
class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <Chatting />
      </div>
    );
  }
}

export default App;
