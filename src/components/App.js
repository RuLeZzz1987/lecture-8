import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/About';
import NotFound from '../pages/NotFount';
import Nav from './Nav';
import ArticlesPage from '../pages/ArticlesPage';
import ArticlePage from '../pages/ArticlePage';

const styles = {
  maxWidth: 1170,
  margin: '0 auto',
  padding: '0 16px'
};


function App() {
  return (
    <div style={styles}>
      <h1>Hello Page</h1>
      <Nav />
      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/qwe" component={ArticlesPage}/>
        <Route path="/about-us" component={AboutPage}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
