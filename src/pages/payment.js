import React from 'react';

import data from "./data.json";

class PaymentPage extends React.Component {
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
                               data.PaymentPage.map((title,i) => {
                                    return (
                                    <div key={i}>
                                    <h1>{title.pagetitle}</h1>
                                    <p className="pagesubtitle">{title.pagesubtitle}</p>
                                    </div>
                                  
                                    );
                                })
                            }
                    </div>
                </div>
            </div>
        </div>
    </div>

    <section className="technology">
    <div className="container">
        <div className="row">
          <div className="col-md-8">
          {
                               data.PaymentPage.map((custom,i) => {
                                    return (
                                    <>
               <div key={i} className="cotent-outer">
                   
                                <h2 className="title">{custom.customtitle}</h2>
                                <p dangerouslySetInnerHTML={{__html:custom["customdesc"]}}></p>
                     
                </div>
                           </>
                       );
                                })
                            }
          </div>
        </div>
      </div>
        <div className="container mt-5">
              {
                  data.PaymentPage.map((tech,i) => {
                    return ( 
            <div key={i} className="row techrow">
         

                    <>
                                    {
                        tech.Paymentdesc.map((techdescs,i) => {
                              return (
                                      <div key={i} className="col-md-4">
                                        <div className="content-outer">
                                            <span className="image-outer">
                                            <img className="img-fluid" src={techdescs.image} alt={techdescs.title} />
                                            </span>
                                            <h3 className="tech-title">
                                                {techdescs.title}
                                            </h3>
                                            <p className="tech-disc" >{techdescs.desc}</p>
                                        </div>
                                    </div>
                              );
                            })
                          }
                       </>      
                
              
            </div>
               );
                  })
                } 
        </div>
    </section>

  
</>
);
}
}
export default PaymentPage;