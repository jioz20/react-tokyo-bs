import React, {Component} from 'react';
import './App.css';
import TodoItem from './components/TodoItem/TodoItem';
import TrafficLight from './components/TrafficLight/TrafficLight';

class App extends Component {

  constructor()
  {
    super();

    this.todoItems = [
      {title: 'Rut tien', isComplete: true},
      {title: 'Danh vot', isComplete: false},
      {title: 'Nau an', isComplete: true},
    ]
  }

  render()
  {
    return (
      <div className="App">
          {
             this.todoItems.length > 0 && this.todoItems.map((item, index) => <TodoItem key={index} item={item}></TodoItem>)
          }
          {
            this.todoItems.length == 0 && 'Nothing here'
          }


          <TrafficLight></TrafficLight>
      </div>
    );
  }
}

export default App;
