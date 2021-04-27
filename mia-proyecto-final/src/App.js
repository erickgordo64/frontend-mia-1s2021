import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navegar from './components/navigate';
import login from './components/login'
import Estudiante from './components/estudiante';

function App() {
  return (
    <Router>
      <Route path="/login" exact component={login}></Route>
      <Route path="/estudiante" component={Estudiante}></Route>
    </Router>
  );
}

export default App;
