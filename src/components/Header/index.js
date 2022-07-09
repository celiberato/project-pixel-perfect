import React from "react";
import Logo from '../Logo';
import Menu from '../Menu';
import Banner from '../Banner';
import style from '../../assets/css/style.css'

class Header extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <div className="d-flex justify-content-between" style={{width: '100%'}}>
                    <Logo></Logo>
                    <Menu marginTop="70px"></Menu>
                </div>
            </React.Fragment>
        )
    }
}

export default Header;

