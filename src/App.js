import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    count: 0,
    test: 10,
  };

  constructor(props) {
    super(props);
    console.log("constructor");
  }
  componentDidMount() {
    console.log("component did mount");
  }
  componentDidUpdate() {
    console.log("component did update");
  }
  componentWillUnmount() {
    console.log("component will unmount");
  }
  add = () => {
    console.log("add");
    console.log(this.state.test);
    this.setState((current) => ({ count: current.count + 1 }));
  };
  minus = () => {
    console.log("minus");
    console.log(this.state.test);
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    console.log("component rendering");
    return (
      <div>
        <h1>I am a class component {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
