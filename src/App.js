import React, { Component } from 'react';
import { Provider } from './context'
import Todos from './components/todos/Todos'

import AddToList from './components/todos/AddToList'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
class App extends Component {

  render() {
  
  
    return (
       <Provider > 
      <div className="App">
    
        <div className="App-header">
        <div className="container"> 
        <AddToList />
         <Todos />
        </div>
        </div>
      </div>
      </Provider> 
    );
  }
}

export default App;
