import logo from './logo.svg';
import './App.css';
import LoginPage from './components/organisms/LoginPage/LoginPage';
import RegisterPage from './components/organisms/LoginPage/RegisterPage';
import HomePage from './components/organisms/Homepage/HomePage.jsx'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import {Header} from "./components/molecules/Header/Header";
import React from "react";
import AllMovies from "./components/organisms/AllMovies/AllMovies";

function App() {
  const [user, setUser] = React.useState();

  return (
    <Router>
    <div className="App" style={{backgroundColor: 'var(--beige)'}}>
      {
        !(window.location.href.endsWith('/') ||
        window.location.href.endsWith('/register'))
        && (
          <Header
            user={user}
            onLogin={() => setUser({ name: 'Jane Doe' })}
            onLogout={() => setUser(undefined)}
            onCreateAccount={() => setUser({ name: 'Jane Doe' })}
          />
        )
      }

      <Routes>
              <Route path='/register' element={<RegisterPage/>} />
              <Route exact path='/' element={<LoginPage/>}  />
              <Route path="/sign-in" element={<LoginPage/>}  />
              <Route path="/homepage" element={<HomePage/>}  />
              <Route path="/all-movies" element={<AllMovies/>} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
