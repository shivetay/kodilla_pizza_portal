import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import { StylesProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import Dashboard from './components/views/Dashboard/Dashboard';
import Kitchen from './components/views/Kitchen/Kitchen';
import Ordering from './components/views/Ordering/Ordering';
import Order from './components/views/Order/Order';
import NewOrder from './components/views/NewOrder/NewOrder';
import Booking from './components/views/Booking/Booking';
import Event from './components/views/Event/Event';
import Waiter from './components/views/Waiter/Waiter';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#2b4c6f' },
    // secondary: { main: '#11cb5f' }, 
  },
});

function App() {
  return (
    <BrowserRouter basename={'/panel'}>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <MainLayout>
            <Switch>
              <Route exact path={`${process.env.PUBLIC_URL}/`} component={Dashboard} />
              <Route path={`${process.env.PUBLIC_URL}/login`} component={Login} />
              <Route exact path={`${process.env.PUBLIC_URL}/tables`} component={Tables} />
              <Route path={`${process.env.PUBLIC_URL}/kitchen`} component={Kitchen} />
              <Route exact path={`${process.env.PUBLIC_URL}/ordering`} component={Ordering} />
              <Route path={`${process.env.PUBLIC_URL}/ordering/order/:id`} component={Order} />
              <Route path={`${process.env.PUBLIC_URL}/ordering/new`} component={NewOrder} />
              <Route path={`${process.env.PUBLIC_URL}/tables/booking/:id`} component={Booking} />
              <Route path={`${process.env.PUBLIC_URL}/tables/event/:id`} component={Event} />
              <Route path={`${process.env.PUBLIC_URL}/waiter`} component={Waiter} />
            </Switch>
          </MainLayout>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  );
}

export default App;

