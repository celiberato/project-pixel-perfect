import React from "react";
import GappFooterImage from '../../assets/images/logo-gapp-footer.png';
import IconLocationImage from '../../assets/images/icon-location.png';

function Footer (props) {
    
    return (
        <React.Fragment>
            <footer>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-6 d-flex justify-content-center">
                            <div style={{marginRight: '30px',  marginTop: '0px'}}>
                                <img src={GappFooterImage} width='2rem;'/>
                            </div>
                            <div className="d-flex align-items-center" style={{marginTop: '0px'}}>
                                <div style={{width: '16rem'}}>
                                    <h5>Rua xxxxxxxx</h5>
                                    <h5>CEP: xxxxxx - São Paulo - SP<br/></h5>
                                    <h5>Tel. xxxx-xxxx<br/></h5>
                                    <h5>E-mail: xxx@xxx.com.br<br/></h5> 
                                </div>
                            </div>
                        </div>

                        <div className="col-5 d-flex justify-content-between">
                            <div style={{marginTop: '5px', marginLeft: '-40px'}}>
                                <img src={IconLocationImage}/>
                            </div>
                            <div style={{textAlign: 'right', marginTop: '15px'}}>
                                <h5 style={{width: '12rem'}}><strong>Fale comosco</strong></h5>
                                <h5 style={{width: '12rem'}}>2022 &copy; Todos os direitos reservados</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    )
}

export default Footer;
