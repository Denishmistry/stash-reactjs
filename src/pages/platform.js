import React from 'react';
import data from "./data.json";

class PlatformPage extends React.Component {
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
                               data.PlatformPage.map((title,i) => {
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

    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
               <div className="cotent-outer">
                   {
                               data.PlatformPage.map((custom,i) => {
                                    return (
                                    <div key={i}>
                                <h2 className="title">{custom.customtitle}</h2>
                                <p dangerouslySetInnerHTML={{__html:custom["customdesc"]}}></p>
                                </div>
                       );
                                })
                            }
                </div>
          </div>
        </div>
      </div>

    <div className="platform">
        <div className="container">
            <div className="row techrow">
              <div className="col-12">
                {
                               data.PlatformPage.map((software,i) => {
                                    return (
                 <div key={i} className="cotent-outer">
                 
                                    <>
                                <h2 className="title">{software.softwaretitle}</h2>
                                </>
                                      </div>
                                       );
                                })
                            }

              </div>
               {
                  data.PlatformPage.map((softwarelist) => {
                    return ( 

                    <>
                                    {
                        softwarelist.SoftwareList.map((list) => {
                              return (
                                      <div className="col-md-4">
                                        <div className="content-outer">
                                            <span className="image-outer">
                                            <img className="img-fluid" src={list.image} alt={list.title} />
                                            </span>
                                            <ul className="list-unstyle softlist">
                                                {
                                                  list.DetailList.map((dlist,i) => {
                                                        return (
                                                        <li key={i}>{dlist}</li>

                                                    );
                                                })
                                              }
                                            </ul>
                                            

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
    </div>
    </section>

 


  
</>
);
}
}
export default PlatformPage;