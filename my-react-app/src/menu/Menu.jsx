import React from 'react';
import styles from './styles.module.css';
import { FaRegUser, FaHome, FaTags, FaHistory, FaQuestionCircle, FaShoppingCart, FaStar, FaStoreAlt, FaTshirt } from 'react-icons/fa';
import { MdCategory } from "react-icons/md";

const NavMenu = () => {
    return (
        <nav className={styles['nav-menu']}>
            <ul >
                <NavItem icon={<FaHome/>} itemName={'Inicio'}/>
                <NavItem icon={<FaTags/>} itemName={'Ofertas'} />
                <NavItem icon={<FaHistory/>} itemName={'Historial'}/>
                <NavItem icon={<FaQuestionCircle/>} itemName={'Ayuda'}/>
            </ul>
            <ul >
                <NavItem icon={<FaShoppingCart/>} itemName={'Supermercado'}/>
                <NavItem icon={<FaTshirt/>} itemName={'Moda'}/>
                <NavItem icon={<FaStar/>} itemName={'Mas vendido'}/>
                <NavItem icon={<FaStoreAlt/>} itemName={'Tiendas oficiales'}/>
                <NavItem icon={<MdCategory/>} itemName={'Categorias'}/>
            </ul>
        </nav>
    );
}

const NavItem = ({icon, itemName}) => {
    return(<li className={styles['wrapper-cont']}>
                <a href="" >
                    <span className={styles['icon-item-menu']}>{icon}</span>
                    <span className={styles['link-text']}>{itemName}</span>
                </a>
           </li>);
}

const Menu = () => {
    return (
        <div className={styles['menu-conteiner']}>
            <div className={styles['login-regis']}>
                <div className={styles['description-log']}>
                    <span className={styles['icon-descript']}>{<FaRegUser/>}</span>
                    <div className={styles['description-text']}>
                        <h2>Bienvenido</h2>
                        <span>Ingrese a su cuenta pára ver tus compras, favoritos, etc</span>
                    </div>

                </div>
                <div className={`${styles['wrapper-cont']} ${styles['butt-logn-regs']}`}>
                    <a href="">Iniciar Sesion</a>
                    <a href="">Registrarse</a>
                </div>
            </div>
            <NavMenu/>
        </div>
    )
}
export default Menu;
