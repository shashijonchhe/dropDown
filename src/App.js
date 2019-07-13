import React,{Component} from 'react';
import './App.css';

import Select from "react-select";
//import { connect } from "react-redux";

// const cities = [
//   { label: "San Jose", value: "SJ" },
//   { label: "SUNNYVALE", value: "SV" },
//   { label: "SANTA cLARA", value: "SC" },
//   { label: "lOS aNGELES", value: "LA" }
// ];

// let text = "";

const Cities = props => {
  return (
    <div>
      <Select options={props.cities} onChange={props.onHandleChange} />
      <span>{props.text}</span>
    </div>
  );
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cities: [
        { label: "San Jose", value: "SJ" },
        { label: "SUNNYVALE", value: "SV" },
        { label: "SANTA CLARA", value: "SC" },
        { label: "LOS ANGELES", value: "LA" }
      ],

      text: ""
    };
  }

  onHandleChange = e => {
    // console.log(e);
    let text = this.state.text;

    this.setState({
      text: e.label
    });
  };

  render() {
    return (
      <Cities
        cities={this.state.cities}
        text={this.state.text}
        onHandleChange={this.onHandleChange}
      />
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     cities: reducer.state.cities
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {

//   };
// };

export default App;



