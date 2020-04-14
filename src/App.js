import React from "react";
import SimpsonQuote from "./component/SimpsonQuotes";
import axios from "axios";

const sampleQuote = {
  character: "Duffman",
  quote: "Oh Yeah!",
  image:
    "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FDuffman.png?1497567511709",
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: sampleQuote,
    };
    this.getQuote = this.getQuote.bind(this);
  }

  getQuote() {
    // Send the request
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes")
      // Extract the DATA from the received response
      .then(response => response.data)
      // Use this data to update the state
      .then(data => {
        console.log(data);
        this.setState({
          quote: data[0],
        });
      });
  }

  render() {
    return (
      <div className='App'>
        <SimpsonQuote quote={this.state.quote} />
        <button type='button' onClick={this.getQuote}>
          New Quote
        </button>
      </div>
    );
  }
}

export default App;
