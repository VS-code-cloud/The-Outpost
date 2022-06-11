import React from 'react';
import { Container } from '@material-ui/core';
//
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import PostDetails from './components/PostDetails/PostDetails';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import createHistory from 'history/createBrowserHistory';
import Landing from './components/Landing/Appy'

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));
  const history = createHistory();
  return (
    <div>
    <BrowserRouter history={history}>
      <Container maxWidth='xl'>
      <Navbar isLoggedIn = {user ? true : false} communities = {user?.result?.communities}/>
        <Switch>
          <Route path='/' exact component={() => (user ? <Redirect to='/posts' /> : <Landing/>)} />
          <Route path='/posts' exact component={() => (!user ? <Redirect to='/' /> : <Home/>)} />

          <Route path='/posts/search' exact component={Home} />
          <Route path='/posts/:id' exact component={PostDetails} />
           <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/posts" />)} />
           <Route
             path='/auth'
             exact
             // component={() => (!user ? <Auth /> : <Redirect to='/posts' />)}
             component={Auth}
           />

          {/*<Route path={`/profile/${user.results._id}`}>
            <Profile />
          </Route>*/}
       </Switch> 
      </Container>
    </BrowserRouter>
    </div>
  );
};
export default App;
