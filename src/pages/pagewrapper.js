import React from 'react';
import Home from './home';
import ContactPage from './contactuspage';
import TechnologiesPage from './technology';
import PlatformPage from './platform';
import PaymentPage from './payment'

import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

class PageWrapper extends React.Component {
    render(){
        return(
          
           <>
                      <Switch>
                        <Route  exact path="/" component={Home} />
                        <Route   path="/contact" component={ContactPage} />
                        <Route   path="/technology" component={TechnologiesPage} />
                        <Route   path="/payment" component={PaymentPage} />
                        <Route   path="/platform" component={PlatformPage} />
                      </Switch> 
          
          </>  
         
        );
    }
}
export default PageWrapper;