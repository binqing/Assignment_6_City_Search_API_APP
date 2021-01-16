import React from 'react';
import './App.css';
import Citysearch from './components/Citysearch';


class App extends React.Component {
  constructor (props) {
    super(props); 
    this.state  = { cityname: '',
        data: []
     }
  }

  render () {
    return (
      <div className="App">
        <h1> City Search </h1> <br />
         <Citysearch />
      </div>
    );
  }
}

export default App;
