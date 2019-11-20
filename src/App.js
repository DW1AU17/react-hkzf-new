import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home'
import CityList from './pages/CityList';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/citylist" component={CityList} />
      </Router>
    </div>
  );
}

export default App;
