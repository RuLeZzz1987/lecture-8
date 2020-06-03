import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
// import Loadable from 'react-loadable';
import Nav from './Nav';
import Loader from './Loader';
import { connect } from "react-redux";
import { isAuthorized } from "../redux/selectors";

// const HomePageAsync = Loadable({
//   loader: () => import('../pages/HomePage' /* webpackChunkName: "home-page" */),
//   loading: Loader,
// });
//
// const AboutPageAsync = Loadable({
//   loader: () => import('../pages/About' /* webpackChunkName: "about-page" */),
//   loading: Loader,
//   timeout: 2000,
// });
//
// const NotFoundAsync = Loadable({
//   loader: () => import('../pages/NotFound' /* webpackChunkName: "notfound-page" */),
//   loading: Loader,
//   timeout: 2000,
// });
//
// const ArticlesPageAsync = Loadable({
//   loader: () => import('../pages/ArticlesPage' /* webpackChunkName: "articles-page" */),
//   loading: Loader,
//   timeout: 2000,
// });
//
// const ArticlePageAsync = Loadable({
//   loader: () => import('../pages/ArticlePage' /* webpackChunkName: "article-page" */),
//   loading: Loader,
//   timeout: 2000,
// });

const HomePageAsync = lazy(() => import('../pages/HomePage' /* webpackChunkName: "home-page" */));
const NotFoundAsync = lazy(() => import('../pages/NotFound' /* webpackChunkName: "notfound-page" */));
const AboutPageAsync = lazy(() => import('../pages/About' /* webpackChunkName: "about-page" */));
const ArticlesPageAsync = lazy(() => import('../pages/ArticlesPage' /* webpackChunkName: "articles-page" */));
const ArticlePageAsync = lazy(() => import('../pages/ArticlePage' /* webpackChunkName: "article-page" */));
const LoginPageAsync = lazy(() => import('../pages/LoginPage' /* webpackChunkName: "login-page" */));

const styles = {
  maxWidth: 1170,
  margin: '0 auto',
  padding: '0 16px'
};


function App({isAuthorized}) {
  return (
    <div style={styles}>
      <h1>Hello Page</h1>
      <Nav isAuthorized={isAuthorized}/>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact component={HomePageAsync}/>
          {isAuthorized && <Route path="/articles/:id" component={ArticlePageAsync}/>}
          {isAuthorized && <Route path="/articles" component={ArticlesPageAsync}/>}
          <Route path="/about-us" component={AboutPageAsync}/>
          <Route path="/login" component={LoginPageAsync} />
          <Route component={NotFoundAsync}/>
        </Switch>
      </Suspense>
    </div>
  );
}

const mapStateToProps = state => ({
  isAuthorized: isAuthorized(state)
});


export default connect(mapStateToProps)(App);
