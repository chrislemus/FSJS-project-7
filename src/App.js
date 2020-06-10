import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import SearchForm from './Components/SearchForm';
import MainNav from './Components/MainNav'
import Cats from './Components/Featured/Cats';
import Dogs from './Components/Featured/Dogs';
import Computers from './Components/Featured/Computers';
import Search from './Components/Search';
import Page404 from './Components/404';



const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
          <SearchForm />
          <MainNav />
          <div className="photo-container">
            <Switch>
              <Route exact path="/">
                <Redirect to="/cats"/>
              </Route>
              <Route path="/cats" component={Cats} />
              <Route path="/dogs" component={Dogs} />
              <Route path="/search/:query" component={Search} />
              <Route path="/computers" component={Computers} />
              <Route component={Page404} />
            </Switch>  
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;