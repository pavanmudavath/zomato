import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import AppBar from './AppBar.jsx';
import SignUp from './SignUp.jsx';
import Login from './Login.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppBar/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
  )
}

export default App
