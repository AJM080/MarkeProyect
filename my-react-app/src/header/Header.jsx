import styles from './Header.module.css';
import logo from '../assets/logo/logo.png';
import SearchInput from '../buscador/SearchInput';
import NavBar from '../NavBar/NavBar';
import { FaCartArrowDown, FaAngleDown } from 'react-icons/fa';

function Header(){
    
    const navBarCentral = [{itemName: 'Categoria', icon: <FaAngleDown/>}, {itemName: 'Supermercado'}, 
                                     {itemName: 'Cupones'}, {itemName:'Vender'}, {itemName: 'Ofertas'}, {itemName: 'Moda'}];
         
    const navLogin = [{itemName: 'Iniciar Sesion'}, {itemName: 'Registrase'}, 
                                     {itemName: 'Mis compras'},{itemName:'', icon: <FaCartArrowDown />}];      

    return(
        <header className={styles['header-nav']}>
            <div className={styles['box-lay-header']}>
                <div className={`${styles['wrapper-img']} ${styles['logo']}`}><img src={logo} alt=""/></div>
                <div className={styles['wrapper-cont']}>
                    <SearchInput/>
                </div>
                <div className={styles['prom']}>
                    
                </div>
                <div className={styles['api-location']}></div>
                <div className={`${styles['wrapper-cont']} ${styles['conteiner-nav']}`}>
                    <NavBar items={navBarCentral}/>
                </div>
                <div className={`${styles['wrapper-cont']} ${styles['log-regs']}`}>
                    <NavBar items={navLogin}/>
                </div>
            </div>
        </header>
    );
}

export default Header;