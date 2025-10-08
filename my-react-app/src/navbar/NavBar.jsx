import styles from './styles.module.css';
import React, { useState, useEffect } from 'react';
import { FaCartArrowDown, FaAngleDown } from 'react-icons/fa';
import SubMenu from '../submenu/SubMenu.jsx'


function NavItems({ items = [] }) {
    const [open, setOpen] = useState(false);
    const liItems = [];
    const linkText = document.querySelectorAll('.link-text');

    console.log(linkText)
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log('pasa')

        return () => {
            window.removeEventListener("resize", handleResize);
        }

    }, []);

    function handleResize() {
        if (window.innerWidth < 1540) {
            linkText.forEach(t => {
                t.style.fontSize = ".7rem";
            });
        }
    }
    if (items.length > 0) {
        for (let i = 0; i < items.length; i++) {
            liItems.push(<li key={i} className={styles['nav-item']}
                onClick={() => setOpen(!open)}>
                <a href='#' className={styles['nav-link']}>
                    <span className={styles['link-text']}>
                        {items[i].itemName}{items[i].icon}
                    </span>
                </a>
                {(items[i].itemName.toLowerCase() === 'categoria' && open) && <SubMenu />}
            </li>);
        }
    }

    return (liItems);
}

function NavBar({ items }) {

    return (
        <nav className={styles['nav-bar']}>
            <ul className={styles['navbar-nav']}>
                <NavItems items={items} />
            </ul>
        </nav>

    );

}

export default NavBar;
