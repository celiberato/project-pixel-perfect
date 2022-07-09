import React, { useState, useEffect } from 'react';
import BannerImage from '../../assets/images/banner-01.jpg'

function Banner (props) {   

    return (
        <React.Fragment>
            <section id="banner">
                {props.showCompleteBanner == true && 
                     <div className="full-image d-flex justify-content-between">
                        <div style={{width: '61%'}}>
                            <img src={BannerImage}></img>
                        </div>
                        <div className="right-session" style={{width: '40%', padding: '30px 30px 30px 30px', height: '400px', color: 'white'}}>
                            <h1>Ferramentaria</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga autem, facilis quae dolor repellat fugit tenetur laborum ad.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga autem, facilis quae dolor. Fuga autem, facilis quae dolor 
                            </p>
                        </div>
                    </div>
                } 
                {props.showCompleteBanner   == false && 
                    <div className="parcial-image d-flex justify-content-between">
                        <div>
                            <div className="right-session d-flex align-items-start" style={{width: '100%', padding: '30px 30px 30px 30px', height: '270px', color: 'white'}}>
                                <h1 style={{paddingRight: '30px', fontSize: '1rem'}}>Ferramentaria</h1>
                                <p style={{fontSize: '0.95rem'}}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga autem, facilis quae dolor repellat fugit tenetur laborum ad.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga autem, facilis quae dolor. Fuga autem, facilis quae dolor 
                                </p>
                            </div>
                        </div>
                    </div>
                }
            </section>
        </React.Fragment>
    )
}

export default Banner;
