
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import login from './components/login'
import loginA from './components/loginA'
import Estudiante from './components/estudiante';
import Carga from './components/carga'
import Chat from './components/chat'
import DashA from './components/dashA'

function App() {
  return (
    <Router>
      <Route path="/" exact component={login}></Route>
      <Route path="/loginA" exact component={loginA}></Route>
      <Route path="/estudiante" component={Estudiante}></Route>
      <Route path="/carga" component={Carga}></Route>
      <Route path="/chat" component={Chat}></Route>
      <Route path="/DashA" component={DashA}></Route>

    </Router>
  );
}

export default App;
