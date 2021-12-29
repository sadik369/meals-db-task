import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux'
import store from './store/store'
import Header from './header'
import Home from './home'
import Catageries from './catageries'
import Mealcatagery from './mealcatagery'
import { BrowserRouter,Switch,Route} from 'react-router-dom';
export default function App() {
  return (
  <Provider store={store}>
        <BrowserRouter>
              <Header></Header>
              <Switch>
                  <Route path='/home'>
                       <Home/> 
                  </Route> 
                  <Route path='/catageries'>
                       <Catageries/> 
                  </Route>
                  <Route path='/all/:cat'>
                       <Mealcatagery/> 
                  </Route>   
                  <Route path='/'>
                       <Home/> 
                  </Route>                
              </Switch>
        </BrowserRouter>
  </Provider>
     
   
  );
}


