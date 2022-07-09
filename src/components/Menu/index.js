import React, { useState, useEffect } from 'react';
import styles from './menu.module.css';

function Menu (props) {

    const [marginTop, setMarginTop] = useState(props.marginTop);

    return (
        <React.Fragment>
            <div className={styles.menu} style={{width: '70%', float: 'right', marginLeft: '5%', marginTop: marginTop}}>
                <ul className={styles.menu__ul}>
                    <li className={styles.menu__ul__li}> <a className={styles.menu__ul__li__a} href="#">Home</a> </li>
                    <li className={styles.menu__ul__li}> <a className={styles.menu__ul__li__a} href="#">Quem somos</a> </li>
                    <li className={styles.menu__ul__li}> <a className={styles.menu__ul__li__a} href="#">Produtos e serviços</a> </li>
                    <li className={styles.menu__ul__li}> <a className={styles.menu__ul__li__a} href="#">Aplicações</a> </li>
                    <li className={styles.menu__ul__li}> <a className="btn btn-danger btn-fale-conosco" href="#">Fale Conosco</a> </li>
                </ul>
            </div>
        </React.Fragment>
    )
}

export default Menu;

