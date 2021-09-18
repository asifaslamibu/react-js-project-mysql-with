import React, { Component,Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from './dashboard/Dashboard';
import BasicElements from './form-elements/BasicElements';
import BasicTable from './tables/BasicTable';
import BasicElements2 from './form-elements/BasicElements2';
import Vmaster from './dashboard/Vmaster'; 
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Add_data from './form-elements/Add_data';
import Edit_data from './form-elements/Edit_data';
import Spinner from '../app/shared/Spinner';

// const Dashboard = lazy(() => import('./dashboard/Dashboard'));

const Buttons = lazy(() => import('./basic-ui/Buttons'));
const Dropdowns = lazy(() => import('./basic-ui/Dropdowns'));
const Typography = lazy(() => import('./basic-ui/Typography'));

// const BasicElements = lazy(() => import('./form-elements/BasicElements'));

// const BasicTable = lazy(() => import('./tables/BasicTable'));

const Mdi = lazy(() => import('./icons/Mdi'));

const ChartJs = lazy(() => import('./charts/ChartJs'));

const Error404 = lazy(() => import('./error-pages/Error404'));
const Error500 = lazy(() => import('./error-pages/Error500'));

const Login = lazy(() => import('./user-pages/Login'));
const Register1 = lazy(() => import('./user-pages/Register'));


class AppRoutes extends Component {
  render () {
    return (
      <Suspense fallback={<Spinner/>}>
        <Switch>
          <Route exact path="/dashboard" component={ Dashboard } />
          <Route  path="/vmaster" component={ Vmaster } />

          <Route path="/basic-ui/buttons" component={ Buttons } />
          <Route path="/basic-ui/dropdowns" component={ Dropdowns } />
          <Route path="/basic-ui/typography" component={ Typography } />
          <Route path="/form-Elements/basic-elements"render={(props) => <BasicElements />} />
          <Route path="/form-Elements/basic-elements2/:id"render={(props) => <BasicElements2 />} />
          <Route path="/tables/basic-table"render={(props) => <BasicTable />} />
          <Route path="/form-elements/Add_data"render={(props) => <Add_data />} />
          <Route path="/form-elements/edit_data/:id"render={(props) => <Edit_data />} />
       
          {/* <Route path="/tables/basic-table" component={ BasicTable } /> */}
      
          <Route path="/icons/mdi" component={ Mdi } />

          <Route path="/charts/chart-js" component={ ChartJs } />


          <Route path="/user-pages/login-1" component={ Login } />
          <Route path="/user-pages/register-1" component={ Register1 } />

          <Route path="/error-pages/error-404" component={ Error404 } />
          <Route path="/error-pages/error-500" component={ Error500 } />


          <Redirect to="/dashboard" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;