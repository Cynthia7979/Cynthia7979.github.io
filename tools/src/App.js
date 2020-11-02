import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import GrouperPage from './pages/grouper_page';
import ToolsMainPage from './pages/tools_main_page';
import { MenuComponent } from './components/page_decorations'

import './App.css';

function App() {
  return (
    <div>
      <Router>
        <MenuComponent />
        <div className="App">
          <Switch>
            <Route path="/grouper">
              <GrouperPage />
            </Route>
            <Route path="/">
              <ToolsMainPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
