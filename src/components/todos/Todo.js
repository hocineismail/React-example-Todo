import React, { Component } from 'react'


import  { Consumer } from '../../context' 
 
 class Todo extends Component {

  state = {
    todoend: true
  }
 change = () => {
  this.setState({ todoend: !this.state.todoend})
  console.log(this.todoend)
 }
  
  onDeleteClick = (id, dispatch) => {
    dispatch({type: 'DELETE_TODO', payload: id});
   }
  render() {
    const {  id ,corse  } = this.props.todos;
    return (   <Consumer>
      
       {value =>
       { const {dispatch} =  value
      
       return (
     
         <div>
            {this.state.todoend ? (<li className="list-group-item"  >
   
   <i className="fas fa-times"
         onClick={this.onDeleteClick.bind(this, id, dispatch)}
         style={{cursor: 'pointer', float: 'right', color: 'red'}}>
           </i>
           <h3 onClick={this.change}  style={{cursor: 'pointer'}}> {corse}  </h3> 
            
      
         
   </li>  ) : (<li className="list-group-item" style={{backgroundColor: '#BDBDBD',textDecoration: 'line-through'}} >
   
   <i className="fas fa-times"
         onClick={this.onDeleteClick.bind(this, id, dispatch)}
         style={{cursor: 'pointer', float: 'right', color: 'red'}}>
           </i>
           <h3 onClick={this.change}  style={{cursor: 'pointer', color: '#2E2E2E'}}> {corse}  </h3> 
            
      
         
   </li>  )}
         
         </div>
        
       )
       }
       }
     </Consumer>  )
  }
}
export default Todo;