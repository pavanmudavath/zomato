import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import AppBar from './AppBar.jsx';
import SignUp from './SignUp.jsx';
import Login from './Login.jsx';
import Phonenumber from "./Phonenumber.jsx";
import Location from"./location.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppBar/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/location" element={<Location/>}/>
      </Routes>
    </Router>
  )
}

export default App
