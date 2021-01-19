
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Conexion from "./toutcomponents/Conexion"
import Inscription from "./toutcomponents/Inscription";
import AdminConexion from './component/AdminConexion'
// import Nav from './component/Nav'
import AddEvent from './component/AddEvent'
import Events from './toutcomponents/EventsList'
import Profile from './component/EditProfile'
import Home from './toutcomponents/Home'

import {ProtectedRoute} from '../src/component/protected.route'

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Conexion} />
      <ProtectedRoute exact path='/home' component={Home} />
      <Route exact path='/inscription' component={Inscription} />
      <Route exact path='/admin' component={AdminConexion} />
      <ProtectedRoute exact path='/addEvent' component={AddEvent} />
      <Route exact path='/events' component={Events} />
      <Route exact path='/profile' component={Profile} />
    </Switch>
    {/* <AdminConexion /> */}
    {/* <Profile /> */}
    {/* <AddEvent /> */}
    {/* <Inscription /> */}
    </BrowserRouter>
  );
}

export default App;
