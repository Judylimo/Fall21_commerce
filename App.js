import React from 'react';
import {Route} from 'react-router-dom';
//import {Container} from 'react-bootstrap';
import {Router, Switch} from 'react-router-dom';
import Header from './components/Header';
import Reservationslist from './components/Reservationslist';
import ReserveAcubicle from './components/ReseveAcubicle';
import Error from './components/Error';
import { Container } from 'react-bootstrap';
import Logout from './components/Logout';


function App() {
  return (
    <div>
    <Header/>
    <Container>
    <Route path = "/" exact={true} component={Reservationslist} />
    <Route path = "/ReserveACubicle" exact={true} component={ReserveAcubicle} />
    <Route path = "/Logout"  exact={true} component={Logout} />
    </Container>
    </div>
  )
}

export default App;
    


      


