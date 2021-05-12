import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import login from './components/login'
import loginA from './components/loginA'
import Estudiante from './components/estudiante';
import Carga from './components/carga'
import Chat from './components/chat'
import DashA from './components/dashA'
import EventCalendar from './components/calendar'
import Registro from './components/registrouser'
import Reportes from './components/reportes'
import Temporadas from './components/temporada'
import Jornadas from './components/jornadas'
import DashC from './components/dashC'

function App() {
  return (
    <Router>
      <Route path="/" exact component={login}></Route>
      <Route path="/loginA" exact component={loginA}></Route>
      <Route path="/estudiante" component={Estudiante}></Route>
      <Route path="/carga" component={Carga}></Route>
      <Route path="/chat" component={Chat}></Route>
      <Route path="/DashA" component={DashA}></Route>
      <Route path="/DashC" component={DashC}></Route>
      <Route path='/calendario' component={EventCalendar}></Route>
      <Route path="/registro" component={Registro}></Route>
      <Route path="/reportes" component={Reportes}></Route>
      <Route path="/temporadas" component={Temporadas}></Route>
      <Route path="/jornadas/:ID" component={Jornadas}></Route>
    </Router>
  );
}

export default App;
