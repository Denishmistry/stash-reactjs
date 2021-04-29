import React from 'react';

class ContactSection extends React.Component {
render(){
return(
<>
    <section className="contactsec">
        <div className="container">
            <form id="contactform" className="signupform custom-form" method="post">
                <div className="row">
                    <div className="col-12">
                        <h1 className="ctitle">Request a demo.</h1>
                    </div>
                    <div className="col-md-12 col-lg-6">
                        <div className="form-group">
                            <label className="required" htmlFor="yourname">Your name</label>
                            <input type="text" className="form-control" placeholder="Your name" id="yourname" name="yourname" required="required" />
                        </div>
                        <div className="form-group">
                            <label className="required" htmlFor="youremail">Your Email</label>
                            <input type="text" className="form-control" placeholder="Your Email" id="youremail" name="youremail" required="required" />
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-6">
                        <div className="form-group">
                            <label className="required" htmlFor="msg">Write Your Message</label>
                            <textarea type="text" className="form-control" placeholder="Write Your Message" id="msg" name="msg" required="required" rows="5" cols="50"></textarea>
                        </div>
                    </div>
                    <div className="col-md-12 text-left mt-4">
                        <div className="form-group">
                            <button type="button" className="alt-theme-btn" title="Register">Send</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </section>
</>
);
}
}
export default ContactSection;