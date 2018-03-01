import React from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import DetailPageContainer from './containers/DetailPageContainer';
import SearchResultsContainer from './containers/SearchResultsContainer';

export default class Main extends React.Component {
  render() {
    return (
      <BrowserRouter>
        
          <Switch>
            <Route path='/home' component={HomeContainer} />
            <Route path='/details/id=:id' component={DetailPageContainer}/>
            <Route path='/searchresults/q=:query' component={SearchResultsContainer}/>
            <Redirect from="/" to="/home" />
          </Switch>
        
      </BrowserRouter>

    
    )
  }
}