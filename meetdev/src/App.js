
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Conexion from "./toutcomponents/Conexion"
import Inscription from "./toutcomponents/Inscription";
// import Nav from './component/Nav'
// import AddEvent from './component/AddEvent'
// import Profile from './component/EditProfile'
// import AdminConexion from './component/AdminConexion'
import Home from './toutcomponents/Home'

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Conexion} />
      <Route exact path='/inscription' component={Inscription} />
      <Route exact path='/home' component={Home} />
    </Switch>
    {/* <AdminConexion /> */}
    {/* <Profile /> */}
    {/* <AddEvent /> */}
    {/* <Nav />  */}
    
    {/* <Inscription /> */}
    </BrowserRouter>
  );
}

export default App;
