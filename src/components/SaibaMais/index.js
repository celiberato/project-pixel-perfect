import React from "react";
import DireitaImage from '../../assets/images/direita.jpg';
import VideoImage from '../../assets/images/imgvideo.jpg';
import styles from './saibamais.module.css';


function SaibaMais (props) {
    
    return (
        <React.Fragment>
            <div id="container-saiba-mais" style={{marginTop: '70px'}}>
                <section id="content-saiba-mais">
                    <div id="container-mais" className="d-flex justify-content-between" style={{flexWrap: 'wrap'}}>
                        <div className={styles.redimencionar} style={{marginTop: '-10px', marginBottom: 30}}>
                            <h2>Conheça a GAPP</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quisquam enim voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit.. Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>
                            <div className="d-flex justify-content-start">
                                <a href="#" className="btn-saiba-mais">Saiba mais</a>
                                <img src={DireitaImage} alt="Seta direita" style={{width: 30, height: 30}}/>
                            </div>
                        </div>
                        <div className={styles.redimencionar} style={{marginTop: '-10px', marginBottom: 30}}>  
                            <h2>Produtos e serviços</h2>
                            <p>Perferendis perspiciatis tempora cumque dolore, possimus inventore aliquam. Perferendis perspiciatis tempora cumque dolore, possimus inventore aliquampossimus inventore aliquam</p>
                            <a href="#" className="btn-saiba-mais">Saiba mais</a>
                            <img src={DireitaImage} alt="Seta direita" style={{width: 30, height: 30}}/>
                        </div>
                        <div className={styles.redimencionar} style={{marginTop: '-10px', marginBottom: 30}}>
                            <h2>Principais Aplicações</h2>
                            <a href="#">
                                <img src={VideoImage} alt="Video" style={{marginLeft: '100px'}}/>
                                <div style={{position: 'relative', marginTop: '-25%', marginLeft: '50%'}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30%" height="60" fill="white" className="bi bi-collection-play-fill" viewBox="0 0 16 16">
                                        <path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zm6.258-6.437a.5.5 0 0 1 .507.013l4 2.5a.5.5 0 0 1 0 .848l-4 2.5A.5.5 0 0 1 6 12V7a.5.5 0 0 1 .258-.437z"/>
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>
                </section>
            </div>  
        </React.Fragment>
    )
}

export default SaibaMais;