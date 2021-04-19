import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Link, Router } from "react-router-dom";
import Navegar from './components/navigate';
import Estudiante from './components/estudiante';

function App() {
  return (
    <Router>
      <Navegar/>
      <Route path="/estudiante" component={Estudiante}/>
    </Router>
  );
}

export default App;
