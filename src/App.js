import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Review from './components/Review/Review';
import Manage from './components/Manage/Manage';
import NotFound from './components/NotFound/NotFound';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Help from './components/Help/Help';

  function App() {
  return (
    <div >
       <Header></Header>
       <Router>    
      <Switch>

       <Route path="/Shop">
       <Shop></Shop>
       </Route>

       <Route path="/Review">
          <Review></Review>
       </Route>

       <Route path='/Manage'>
        <Manage></Manage>
       </Route>

       <Route path ="/Help">
          <Help></Help>
         </Route>

       <Route ptah="/product/:productKey">
           <ProductDetail></ProductDetail>
         </Route>
         
       
         
        <Route exact path='/'>
        <Shop></Shop>
        </Route>
         
        

        <Route path='*'>
        <NotFound></NotFound>
        </Route>

      </Switch>
      </Router>

     
     
     

   </div>
  );
}


export default App;
