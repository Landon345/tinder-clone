import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/chat/:person">
            <Header backButton="/chats" />
            <ChatScreen />
          </Route>
          <Route path="/chats" exact>
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/" exact>
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
