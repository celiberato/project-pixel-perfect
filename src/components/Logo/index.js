import React from "react";
import LogoImage from '../../assets/images/logo-gapp.png';

class Logo extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <div className="logo">
                    <img src={LogoImage} alt="GAPP" style={{width: '120%', marginRight: '0%'}}/>
                </div>
            </React.Fragment>
        )
    }

}

export default Logo;

