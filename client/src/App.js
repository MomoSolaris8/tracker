import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";


import Navbar from "./components/navbar.js"
import ExercisesList from "./components/ exercises_list.js";
import EditExercise from "./components/edit_exercise.js";
import CreateExercise from "./components/create_exercise.js";
import CreateUser from "./components/ create_user.js";

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
