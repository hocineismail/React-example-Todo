
import React ,{Component} from 'react';

import Todo from './components/todos/Todo'

const Context =  React.createContext();

const reducer = (state, action) => {
  switch(action.type) {
        case 'DELETE_TODO':
        return {
            ...state,
            lists: state.lists.filter(list => 
              list.id !== action.payload)
        }
        case 'ADD_TODO':
        return {
            ...state,
            lists: [action.payload, ...state.lists ]
        }
        
        default:
        return state;
  };
}

export class Provider  extends Component {
    state = {
        lists: [
          {
            id: 1,
            corse: 'liste 1'
          },
          {
            id: 2,
            corse: 'paris'
          },
          {
            id: 3,
            corse: 'tour effel'
          },
         
        ],
        dispatch: action => {
          this.setState( state => reducer(state, action))
      }
      };

  

    render() {
        return (
            
            <Context.Provider value={this.state}>
            {this.props.children}
            </Context.Provider>
        )
    }

}

export const Consumer = Context.Consumer;