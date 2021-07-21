import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Principal';
import Products from './components/Produtos';
import Clients from './components/Clientes';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/produtos'>
          <Products />
        </Route>
        <Route path='/clientes'>
          <Clients />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;