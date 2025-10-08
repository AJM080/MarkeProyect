import Header from './Header/Header';
import HeaderMobile from './HeaderMobile/HeaderMobile'

function HeaderPrincipal(){
    // if(window.innerWidth <= 900){
    //     return(
    //       <HeaderMobile/>
    //     );
    // }
    return (<Header/>);
}



export default HeaderPrincipal