import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,  Route } from 'react-router-dom';

import './scss/main.scss'
import Movies from './components/Movies';
import AboutMovie from './components/AboutMovie';

const  App = () => {

  return (
    <div className='main'>
    <Router>
        <Route path='/' exact component={Movies} />
        <Route path='/AboutMovie/:id' component={AboutMovie} />
    </Router>
</div>
  );
}

export default App;
