import React, { Component } from "react";
import Card from "../components/Card";

class Game extends Component {
  state = {
    image_id: [{index: 0, clicked: false}, {index: 1, clicked: false} , {index: 2, clicked: false}],
    match: false,
    score: 0,
    topScore: 0
  };

  // When the component mounts, load the next dog to be displayed
  componentDidMount() {
    //this.loadNextDog();
  }

  updateItem(id, itemAttributes) {
    //var index = this.state.image_id.findIndex(x=> x.id === id);
    if (id === -1)
      {}
    else {
      console.log("Flipping from false to true");
      console.log(this.state.image_id.slice(0,id));
      console.log(this.state.image_id.slice(id+1));
      this.setState({
        image_id: [
           ...this.state.image_id.slice(0,id),
           Object.assign({index: this.state.image_id[id].index, clicked: itemAttributes}),
           ...this.state.image_id.slice(id+1)
        ]
      });
    }
  }

handleBtnClick = (event, i) => {
  console.log("here's i:");
  console.log(i);
  console.log("this.state.image_id[i].clicked:")
  console.log(this.state.image_id[i].clicked);
  if (this.state.image_id[i].clicked === false) {    
    this.setState({score: this.state.score+1});
    this.updateItem(i, true);
  } else {
    console.log("You clicked twice on the same image. You lost!");
  }

//     // Get the data-value of the clicked button
//     const btnType = event.target.attributes.getNamedItem("data-value").value;
//     // Clone this.state to the newState object
//     // We'll modify this object and use it to set our component's state
//     const newState = { ...this.state };

//     if (btnType === "pick") {
//       // Set newState.match to either true or false depending on whether or not the dog likes us (1/5 chance)
//       newState.match = 1 === Math.floor(Math.random() * 5) + 1;

//       // Set newState.matchCount equal to its current value or its current value + 1 depending on whether the dog likes us
//       newState.matchCount = newState.match
//         ? newState.matchCount + 1
//         : newState.matchCount;
//     } else {
//       // If we thumbs down'ed the dog, we haven't matched with it
//       newState.match = false;
//     }
//     // Replace our component's state with newState, load the next dog image
//     this.setState(newState);
//     this.loadNextDog();
};

//   loadNextDog = () => {
//     API.getRandomDog()
//       .then(res =>
//         this.setState({
//           image: res.data.message
//         })
//       )
//       .catch(err => console.log(err));
//   };

  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  render() {
    var new_image_id = this.shuffle(this.state.image_id);
    //this.setState({image_id: new_image_id});
    return (
      <div>
        <h1 className="text-center">Clicky Game!</h1>
        <h3 className="text-center">
        Click on an image to earn points, but don't click on any more than once!   
        </h3>
        <h1 className="text-center">
          Score: {this.state.score} Top score: {this.state.topScore}
        </h1>
        <div className="row">

          <div className="col-xs-2">
            <Card image_id={new_image_id[0].index} handleBtnClick={(e) => {this.handleBtnClick(e, 0)}} />
          </div>
          <div className="col-xs-2">
          </div>
          <div className="col-xs-2">
            <Card image_id={new_image_id[1].index} handleBtnClick={(e) => {this.handleBtnClick(e, 1)}} />
          </div>
          <div className="col-xs-2">
          </div>
          <div className="col-xs-2">
            <Card image_id={new_image_id[2].index} handleBtnClick={(e) => {this.handleBtnClick(e, 2)}} />
          </div>
          <div className="col-xs-2">
          </div>
        </div>
        {/* <row>
        <Card image={this.state.image} handleBtnClick={this.handleBtnClick} />
        <Card image={this.state.image} handleBtnClick={this.handleBtnClick} />
        </row>
        <br/>
        <Card image={this.state.image} handleBtnClick={this.handleBtnClick} /> */}
        {/* <Alert style={{ opacity: this.state.match ? 1 : 0 }} type="success">
          Yay! That Pup Liked You Too!!!
        </Alert> */}
      </div>
    );
  }
}

export default Game;