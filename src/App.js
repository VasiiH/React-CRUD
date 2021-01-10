
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
// import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

import Insert from './components/Insert';
import Edit from './components/Edit';
import View from './components/View';

function App() {
  return (
    <Router>

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <h3>Student List</h3>
           <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
             <span class="navbar-toggler-icon"></span>
           </button>
  
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
             <Link to={'/'} className="nav-link">Home</Link>
          </li>
          <li class="nav-item active">
             <Link to={'/insert'} className="nav-link">Insert</Link>
          </li>
          <li class="nav-item active">
             <Link to={'/edit'} className="nav-link">Edit</Link>
          </li>
          <li class="nav-item active">
             <Link to={'/view'} className="nav-link">View</Link>
          </li>
      
    </ul>
  </div>
</nav>
        {/* <div>
        <p> <Link to={'/insert'}>Insert</Link></p>
        </div> */}

        <Switch>
          <Route exact path= '/insert' component ={Insert}/>
           <Route exact path= '/edit:id' component ={Edit}/>
            <Route exact path= '/view' component ={View}/>
        </Switch>

     </Router>
  );
}

export default App;
