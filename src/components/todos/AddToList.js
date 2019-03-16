import React, { Component } from 'react'


import uuid from 'uuid'

import { Consumer} from '../../context'
   

class AddToList extends Component {
    state = {
        corse: ''
     } 
     onSubmit = (dispatch, e) => {
        e.preventDefault();
       const {corse} = this.state;
       const newTodo = {
         id: uuid(),
         corse,
       
       };
       dispatch( {type: 'ADD_TODO',
                  payload: newTodo})
        this.setState({
          corse: '',
          
        })          
      }
     onChange = (e) => this.setState({ [e.target.name]: e.target.value}) 

  render() {
      const {corse} = this.state
    return (
        <Consumer> 

             {value =>
       { const {dispatch} =  value  
       return (

      <div className="card mb-3">
       <div className="card-header">
             Add TODO
       </div>
       <div className="card-body">
       <form onSubmit={this.onSubmit.bind(this, dispatch)}>
           <div className="form-group">
              <label htmlFor="corse">TODO LIST</label>
              <input
              type="text" 
              name="corse"
              className="form-control form control-lg"
              placeholder="Enter TODO..."
              
              value={corse}
            onChange={this.onChange}
               />


           
           </div>
           <input
            type="submit"
            value="Add TODO"
            className="btn btn-light btn-block"
            />
             </form>
               
       </div>
       
      </div>
       )}}
      </Consumer>
    )
  }
}
export default AddToList;