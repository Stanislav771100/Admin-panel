import React from 'react';
import './App.css';
import Leftbar from './screens/Leftbar/Leftbar';
import Header from './screens/Header/Header';
import HomeWork from './screens/HomeWork/HomeWork';

function App() {
  return (
    <div className="App">
        <Leftbar />
        <div className="main">
          <Header />
          <HomeWork />
        </div>
    </div>
  );
}

export default App;
