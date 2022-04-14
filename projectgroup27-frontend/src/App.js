import logo from './logo.svg';
import './App.css';
import LoginPage from './components/organisms/LoginPage/LoginPage';
import RegisterPage from './components/organisms/LoginPage/RegisterPage';
import HomePage from './components/organisms/Homepage/HomePage.jsx'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
              <Route path='/register' element={<RegisterPage/>} />
              <Route exact path='/' element={<LoginPage/>}  />
              <Route path="/sign-in" element={<LoginPage/>}  />
              <Route path="/homepage" element={<HomePage/>}  />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
