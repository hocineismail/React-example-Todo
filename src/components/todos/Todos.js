import React, { Component } from 'react'

import Todo from './Todo'

import { Consumer } from '../../context' 
class Todos extends Component {

        
  render() {
  
    return (
      <Consumer>{ value => {
              const  { lists }  =  value;
  
          return (
            <React.Fragment>
              <div className=" ">
    <ul className="list-group">
    {lists.map(todo =>
    
    <Todo
    key={todo.id}
     todos={todo} /> )}
     </ul>
     </div>
     
             </React.Fragment>
          )
        }}
      </Consumer>
    );
    
  }
}
export default Todos;