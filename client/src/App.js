import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";


import Navbar from "./components/navbar.component.js"
import ExercisesList from "./components/ exercises_list.component.js";
import EditExercise from "./components/edit_exercise.component.js";
import CreateExercise from "./components/create_exercise.component.js";
import CreateUser from "./components/ create_user.component.js";

function App() {
  return (
    <Router>
    <div className="App">
    <Navbar />
      <br/>
      <Route path="/" exact component={ExercisesList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
    </div>
    </Router>
  );
}

export default App;
