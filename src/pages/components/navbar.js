import React from 'react';
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";




class NavBar extends React.Component {
render(){
return(
<>
    <header className="custom-header">
        <div className="container ">
            <nav className="navbar navbar-expand-lg navbar-dark">
                <a className="navbar-brand" href="#!">
                    <img className="img-fluid" src="../images/logo.svg" alt="Logo" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav mx-auto">



                        <Link className="nav-item nav-link "    to='/'>Home</Link>
                        <Link className="nav-item nav-link"   to='/platform'>PLATFORM</Link>
                         <Link className="nav-item nav-link"  to='/technology'>TECHNOLOGY</Link>
                          <Link className="nav-item nav-link"  to='/payment'>PAYMENT</Link>
                           <Link className="nav-item nav-link"  to='/contact'>Contact</Link>
                        
                    </div>
                    <a className="theme-btn" href="#!">Request a Demo</a>
                </div>
            </nav>
        </div>
    </header>

</>
);
}
}
export default NavBar;