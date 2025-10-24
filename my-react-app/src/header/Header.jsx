import styles from './Header.module.css';
import React, {useState, useEffect} from "react";
import logo from '../assets/logo/logo.png';
import SearchInput from '../buscador/SearchInput';
import NavBar from '../NavBar/NavBar';
import Menu from '../Menu/Menu';
import { FaCartArrowDown, FaAngleDown, FaBars} from 'react-icons/fa';

function Header(){
    const [widthView, setWidthView] = useState(window.innerWidth);
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const navBarCentral = [{itemName: 'Categoria', icon: <FaAngleDown/>}, {itemName: 'Supermercado'}, 
                                     {itemName: 'Cupones'}, {itemName:'Vender'}, {itemName: 'Ofertas'}, {itemName: 'Moda'}];
         
    const navLogin = [{itemName: 'Iniciar Sesion'}, {itemName: 'Registrase'}, 
                                     {itemName: 'Mis compras'},{itemName:'', icon: <FaCartArrowDown />}];
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return(() => {
            window.removeEventListener('resize', handleResize);
        })
    }, []);

    function handleResize(){
        setWidthView(window.innerWidth);
    }

    function BiggerScreen(){
        return (
            <>
                <div className={styles['api-location']}></div>
                <div className={`${styles['wrapper-cont']} ${styles['conteiner-nav']}`}>
                    <NavBar items={navBarCentral}/>
                </div>
                <div className={`${styles['wrapper-cont']} ${styles['log-regs']}`}>
                    <NavBar items={navLogin}/>
                </div>
            </>
        )
    }

    return(
        <header className={styles['header-nav']}>
            <div className={styles['box-lay-header']}>
                <div className={`${styles['wrapper-logo']} ${styles['logo']}`}><img src={logo} alt=""/></div>
                <div className={styles['wrapper-cont']}>
                    <SearchInput/>
                </div>
                <div className={`${styles['wrapper-cont']} ${styles['prom']}`}>
                    {widthView <= 970 && <button className={styles['button-menu']} onClick={() => {setIsOpenMenu(!isOpenMenu)}}><span><FaBars/></span></button>}
                </div>
                <div className={styles['row-2']}>
                    {widthView > 970 && <BiggerScreen/>}
                    {(widthView <= 970 && isOpenMenu) && <div className={styles['menu']}><Menu /></div>}
                </div>

            </div>
        </header>
    );
}

export default Header;