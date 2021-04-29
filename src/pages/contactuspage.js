import React from 'react';

import data from "./data.json";

class ContactPage extends React.Component {
render(){
return(
<>
    <div className="subpage">
        <div className="subpageimg">
            <img src="../images/banner.png" alt="contact" />
        </div>
        <div className="subpage-content">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">

             {
        data.ContacPage.map((title,i) => {
            return (
                        <h1 key={i}>{title.pagetitle}</h1>
                                    );
        })
    }
                    </div>
                </div>
            </div>
        </div>
    </div>

             {
        data.ContacPage.map((contact,i) => {
            return (
                        <section key={i}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-7">
                                   
                                        <p dangerouslySetInnerHTML={{__html:contact["description"]}}></p>
                              
                                    </div>
                                    <div className="col-md-5">
                                                <ul className="list-unstyled contact-link">
                                                    <li>
                                                        <span className="icon-outer">
                                                            <img src="../images/emailp.png" alt="email" />
                                                        </span>
                                                        <a href={"mailto:" + contact.imgurl}>{contact.imgurl}</a>
                                                        
                                                    </li>
                                                    <li>
                                                        <span className="icon-outer">
                                                            <img src="../images/phonep.png" alt="Phone" />
                                                        </span>
                                                        
                                                        <a href={"tel:" + contact.phone}>{contact.phone}</a>
                                                    </li>
                                                </ul>
                                    </div>
                                </div>
                            </div>
                        </section>
                  );
        })
    }
</>
);
}
}
export default ContactPage;