import styles from './styles.module.css';
import React, {useEffect} from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn} from "react-icons/fa";

function FooterCol({footerName, footerItems= [], isSocial, icons=[]}){


    
    return(
        <div className={styles['footer-col']}>
            <h4>{footerName}</h4>
            
            {isSocial ? <SocialMedia icons={icons}/> : <ul>{<LiItems footerItems={footerItems}/>}</ul>}
        </div>
    );
}



function LiItems({footerItems}){
    const liItems = [];
    
    if(footerItems.length > 0){
        for (let i = 0; i < footerItems.length; i++) {
            liItems.push(<li key={i}><a href="#">{footerItems[i]}</a></li>)
        }
    }
    return liItems;
}

function SocialMedia({icons}){
    const aItems = []

    if(icons.length > 0){
        for (let i = 0; i < icons.length; i++) {
            aItems.push(<a href=''>{icons[i]}</a>)
        }
    }

    return(<div className={styles['social-links']}>
                {aItems}
           </div>)
}

function  Footer(){

    const companyItems = ['about us', 'our services', 'privacy polacy', 'affiliate program'];
    const getHelpItems = ['FAQ', 'shipping', 'returns', 'order status', 'payment options'];
    const onlineShopItems = ['watch', 'bag', 'shoes', 'dress'];
    const icons = [<FaFacebookF/>, <FaTwitter/>, <FaInstagram/>, <FaLinkedinIn/>]

    return(
        <footer className={styles.footer}>
            <div className={styles['lay-footer']}>
                <FooterCol footerName={'company'} footerItems={companyItems}/>
                <FooterCol footerName={'get Help'} footerItems={getHelpItems}/>
                <FooterCol footerName={'online Shop'} footerItems={onlineShopItems}/>
                <FooterCol footerName={'follow us'}  isSocial={true} icons={icons}/>
            </div>
        </footer>
    )
}

export default Footer;