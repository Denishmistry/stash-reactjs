import React from 'react';

import data from "./data.json";

class TechnologiesPage extends React.Component {
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
                               data.Technologies.map((title) => {
                                    return (
                                    <>
                                    <h1>{title.pagetitle}</h1>
                                    <p className="pagesubtitle">{title.pagesubtitle}</p>
                                    </>
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
            <div className="row techrow">
               {
                  data.Technologies.map((tech) => {
                    return ( 

                    <>
                                    {
                        tech.Techdesc.map((techdescs) => {
                              return (
                                      <div className="col-md-4">
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
                   );
                  })
                } 
              
            </div>
        </div>
    </section>

  
</>
);
}
}
export default TechnologiesPage;