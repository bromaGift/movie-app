import React from 'react';
import './scss/main.scss'
import MovieList from './components/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutMovie from './components/AboutMovie';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/About" component={AboutMovie} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
   <MovieList />
  </div>
)
export default App;
