import React from 'react';
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import data  from "../data.json";



class Footer extends React.Component {
render(){
return(
<>
<footer className="footer">
    <div className="container">
        <div className="row">
            <div className="col-sm-3">
                <img className="footer-logo mb-3" src="../images/logo.svg" alt="Logo"/>
            </div>
            <div className="col-sm-3">
                <h2 className="footer-title mb-3">Menu</h2>
                <ul className="list-unstyled footer-link">
                    <li>
                        <Link  to='/'>Home</Link>
                    </li>     
                    <li>
                       <Link   to='/platform'>PLATFORM</Link>
                    </li>
                    <li>
                        <Link  to='/technology'>TECHNOLOGY</Link>
                    </li>
                    <li>
                      <Link to='/payment'>PAYMENT</Link>
                    </li>
                     <li>
                        <Link  to='/contact'>Contact</Link>
                    </li>
                </ul>
            </div>
            <div className="col-sm-3">
                <h2 className="footer-title mb-3">Contact Us</h2>
                             {
                               data.Social.map((social,i) => {
                                    return (
                                            <ul key={i} className="list-unstyled footer-link">
                                                <li>
                                                    <span className="icon-outer">
                                                        <img src="../images/email.svg" alt="Phone" />
                                                    </span>
                                                    <a href={"mailto:" + social.email}>{social.email}</a>
                                                </li>
                                                <li>
                                                    <span className="icon-outer">
                                                        <img src="../images/phone.svg" alt="Phone" />
                                                    </span>
                                                    <a href={"tel:" + social.phone}>{social.phone}</a>
                                                </li>
                                            </ul>
                                            );
                                })
                            }
            </div>
            <div className="col-sm-3">
                <h2 className="footer-title mb-3">Follow us</h2>
                   {
                               data.Social.map((social,i) => {
                                    return (
                   <ul key={i} className="list-unstyled footersocial-link">
                    <li>
                        <a href={social.linkedin}> 
                            <span className="icon-outer">
                                 <img src="../images/li.svg" alt="Phone" />
                            </span>
                        </a>
                    </li>
                      <li>
                        <a href={social.instagram}> 
                            <span className="icon-outer">
                                 <img src="../images/intagram.svg" alt="Phone" />
                            </span>
                        </a>
                    </li>
                    
                </ul>
                   );
                                })
                            }

            </div>
        </div>
    </div>
    <div className="footer-bottom">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-8 offset-md-3">
                    <p className="copyrights mt-3 pt-3">© 2019 STASH. All right reserved.</p>
                </div>
            </div>
        </div>
    </div>
</footer>

</>
);
}
}
export default Footer;