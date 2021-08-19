import './../src/App.css';
import React from 'react';
import 'regenerator-runtime/runtime';
import HomePage from './pages/HomePage.tsx';
import configureStore from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getToken } from './redux/token';
import LoginPage from './pages/LoginPage.jsx';
import { ThemeProvider } from '@material-ui/core';
import ReccomendationsPage from './pages/ReccomendationsPage';


function App() {

  const {accessTokenBearer} = useSelector((state) => state.token)
  const dispatch = useDispatch();

  function callbackComponent(){
    dispatch(getToken());
    let component;
    if (accessTokenBearer!="Bearer null" || accessTokenBearer!=""){
      console.log(`Current access token state: ${accessTokenBearer}`)
      component = <Redirect to="/create-playlist"/>
    } else {
      component = <LoginPage/>
    }
    return component;
  }

  function loginComponent(){
    let component;
    if (accessTokenBearer=="Bearer null" || accessTokenBearer == ""){
      console.log(`Current access token state: ${accessTokenBearer}`)
      component = <LoginPage/>
    } else {
      component = <Redirect to="/create-playlist"/>
    }
    return component;
  }

  return (
    <ThemeProvider>
      <Provider store={configureStore}>
        <Router>
          <div className="App">
            <Switch>
              <Route exact path="/create-playlist">
                <HomePage/>
              </Route>
              <Route exact path="/recommendations">
                <ReccomendationsPage/>
              </Route>
              <Route exact path="/">
                {loginComponent}
              </Route>
              <Route path="/callback">
                {callbackComponent}
              </Route>
            </Switch>
          
          </div>
        </Router>
      </Provider>
    </ThemeProvider>
    
  );
}

export default App;


