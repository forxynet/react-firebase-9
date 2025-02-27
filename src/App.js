import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

// components
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {
  const { user, authIsReady } = useAuthContext();


  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/">
              {!user ? <Redirect to="/login" /> : <Home />}
            </Route>
            <Route path="/signup">
              {!user ? <Signup /> : <Redirect to="/" />}
            </Route>
            <Route path="/login">
              {!user ? <Login /> : <Redirect to="/" />}
            </Route>
          </Switch>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App
