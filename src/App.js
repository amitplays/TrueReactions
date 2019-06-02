import React from "react";
import PageBody from "./Body/PageBody";
import firebase from "./Config/firebase";
import app from "firebase/app";
import NavigationBarComponent from "./NavigationBar/NavigationBarComponent";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    app = firebase.login();
    this.db = this.app
      .database()
      .ref()
      .child("reactions");
  }

  render() {
    return (
      <div className="App">
        <NavigationBarComponent />
        <br />
        <br />
        <br />
        <PageBody />
      </div>
    );
  }
}

export default App;
