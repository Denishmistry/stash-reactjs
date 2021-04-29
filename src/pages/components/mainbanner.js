import React from 'react';

import data  from "../data.json";

class HomeSlider extends React.Component {
render(){
return(
<>
          {
                    data.HomeBanner.map((bannertext,i) => {
                        return (    

            <div key={i} className="home">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div id="hero">
                                <div className="banner-text  text-center">
                                  <h1>{bannertext.hometext}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


                                
                            );
                        })
                    }


</>
);
}
}
export default HomeSlider;