import './App.css';
import Header from './Header'
import Gameboard from './Gameboard'
import './image.css'
import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      array: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      clicked_array: [],
      score: 0,
      highscore: 0
    }
    this.randomIndex = this.randomIndex.bind(this)
    this.shuffle_array = this.shuffle_array.bind(this)
    this.clicked= this.clicked.bind(this)
  }

    randomIndex(num_elements){
        return Math.floor(Math.random() * (num_elements));
    }

    shuffle_array(){
        let new_array = this.state.array;
        for(let i = 0; i < 12; i++){
            let num = this.randomIndex(12);
            let pc = new_array[i];
            new_array[i] = new_array[num];
            new_array[num] = pc;
        }
        this.setState({
          array: new_array
        })
    }

    clicked(id){
      this.shuffle_array();
      if(this.state.clicked_array.indexOf(id) === -1){
          this.setState((prevState) => (
            {score: prevState.score + 1,
              clicked_array: [...prevState.clicked_array, id]
          }))

      } else {
        //game over
        if (this.state.score > this.state.highscore){
          this.setState((prevState) => 
          ({highscore: prevState.score,
            score: 0,
            clicked_array: []
          }))
        } else {
          this.setState({
            score: 0,
            clicked_array: []
          })
        }
      }
    }

render(){
  return (
    <div className="App">
      <Header />
      <Gameboard score={this.state.score} highscore={this.state.highscore} click={this.clicked} array={this.state.array}/>
    </div>
  );
}
}

export default App;
