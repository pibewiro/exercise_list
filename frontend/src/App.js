import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar"
import EditExercise from "./components/EditExercise"
import CreateExercise from "./components/CreateExercise"
import CreateUser from "./components/CreateUser"
import ExerciseList from "./components/ExerciseList"


function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <br />
        <Route exact path="/" component={ExerciseList} />
        <Route exact path="/editExercise" component={EditExercise} />
        <Route exact path="/createExercise" component={CreateExercise} />
        <Route exact path="/createUser" component={CreateUser} />
      </Router>
    </div>
  );
}

export default App;
