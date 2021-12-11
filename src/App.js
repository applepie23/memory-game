import './App.css';
import Header from './Header'
import Gameboard from './Gameboard'
import './image.css'
import React from 'react';
import alldata from './all-image-info'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      array: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      num_images:12,
      clicked_array: [],
      score: 0,
      highscore: 0,
      mode: "Easy"
    }
    this.randomIndex = this.randomIndex.bind(this)
    this.shuffle_array = this.shuffle_array.bind(this)
    this.clicked = this.clicked.bind(this)
    this.generateArray = this.generateArray.bind(this)
  }

  generateArray(size, range){
    let new_array = []
    let cur_size = 0;
    while(cur_size !== size){
      let index = this.randomIndex(range)
      if(new_array.indexOf(index) === -1){
        new_array[cur_size] = index
        cur_size++
      }
    }
    this.setState({
      array: new_array
    })
  }

    randomIndex(num_elements){
        return Math.floor(Math.random() * (num_elements));
    }

    shuffle_array(){
        let new_array = this.state.array;
        for(let i = 0; i < this.state.num_images; i++){
            let num = this.randomIndex(12);
            let pc = new_array[i];
            new_array[i] = new_array[num];
            new_array[num] = pc;
        } 
        let count = 0;
        for(let i = 0; i < 12; i++){
          if(this.state.clicked_array.indexOf(this.state.array[i]) !== -1){
            count++;
          }
        }
        //all of the first 12 images have already been clicked
        if(count == 12){
          let num = this.randomIndex(12);
          let index = -1;
          let i=0;
          while(index === -1){
            //finds a non clicked element
            if(this.state.clicked_array.indexOf(this.state.array[i]) === -1){
              index=i;
              new_array[num] = this.state.array[i];
            }
          }
          
        }
        this.setState({
          array: new_array
        })
    }

    clicked(id){
      if(this.state.clicked_array.indexOf(id) === -1){
          this.shuffle_array();
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

    setMode(button_text){
      let easy = document.getElementById("E")
      easy.classList.remove("selected-button")
      let inter = document.getElementById("I")
      inter.classList.remove("selected-button")
      let dificult = document.getElementById("D")
      dificult.classList.remove("selected-button")
      let element = document.getElementById(button_text[0])
      element.classList.add("selected-button")
      this.clicked(this.state.clicked_array[0])
      if(button_text[0] === "E"){
        this.generateArray(12, 35)
        this.setState({mode: button_text, num_images:12, score:0})
      } else if(button_text[0] === "I"){
        this.generateArray(20, 35)
        this.setState({mode: button_text, num_images:20, score:0})
      } else {
        this.generateArray(35, 35)
        this.setState({mode: button_text, num_images:35, score:0})
      }
    }

render(){
  return (
    <div className="App">
      <Header />
      <div class="three-buttons">
           <button id="E" onClick={()=>this.setMode("Easy")} class="selected-button" >Easy</button>
           <button id="I" onClick={()=>this.setMode("Intermediate")}>Intermediate</button>
           <button id="D" onClick={()=>this.setMode("Difficult")}>Dificult</button>
        </div>
        <div class="instructions" >There are a total of {this.state.num_images} images to click. Don't click one twice!</div>
      <Gameboard score={this.state.score} highscore={this.state.highscore} click={this.clicked} array={this.state.array}/>
    </div>
  );
}
}

export default App;
