import React from 'react';
import data from "./data.json";
import HomeSlider from "./components/mainbanner"

class Home extends React.Component {
render(){
return(
<>
    <HomeSlider />



     <>
        {
        data.Platform.map((platform,i) => {
            return (
            <section key={i} className="platform">
                <div className="container">
                    <div className="row ">
                     <div className="col-md-6 order-md-2">
                            <div className="img-outer">
                                <img className="img-fluid" src={platform.imgurl} alt="Platform" />
                            </div>
                        </div>
                        <div className="col-md-6  order-md-1">
                            <div className="cotent-outer">
                                <h2 className="title">{platform.title}</h2>
                                <p dangerouslySetInnerHTML={{__html:platform["description"]}}></p>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </section>
            );
        })
    }
    </>

    <>
    {
	    data.Technology.map((technology,i) => {
		    return (
		    <section key={i} className="platform ">
		        <div className="container">
		            <div className="row">
		                <div className="col-md-6">
		                    <div className="img-outer small-img">
		                        <img className="img-fluid" src={technology.imgurl} alt="Technology" />
		                    </div>
		                </div>
		                <div className="col-md-6">
		                    <div className="cotent-outer">
		                        <h2 className="title">{technology.title}</h2>
		                        <p dangerouslySetInnerHTML={{__html:technology["description"]}}></p>
		                    </div>
		                </div>
		            </div>
		        </div>
		    </section>
		    );
	    })
    }
    </>

         <>
        {
        data.PaymentNetwork.map((paymentnetwork,i) => {
            return (
            <section  key={i} className="platform">
                <div className="container">
                    <div className="row">
                     <div className="col-md-6 order-md-2">
                            <div className="img-outer small-img">
                                <img className="img-fluid" src={paymentnetwork.imgurl} alt="Platform" />
                            </div>
                        </div>
                        <div className="col-md-6 order-md-1">
                            <div className="cotent-outer">
                                <h2 className="title">{paymentnetwork.title}</h2>
                                <p dangerouslySetInnerHTML={{__html:paymentnetwork["description"]}}></p>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </section>
            );
        })
    }
    </>



</>
);
}
}
export default Home;