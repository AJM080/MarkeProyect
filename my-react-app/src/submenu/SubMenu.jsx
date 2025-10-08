import styles from './styles.module.css'

function SubMenu(){

    function DropItem({dropItem}){
        return(
            <a href="#" className={styles['drop-item']}>
                <span className={styles['text-item']}>
                    {dropItem}
                </span>
            </a>
        );
    }

    return(
        <div className={styles['dropdown']}>
            <DropItem dropItem={'Vehiculos'}/>
            <DropItem dropItem={'Hogar y Muebles'}/>
            <DropItem dropItem={'Supermercado'}/>
            <DropItem dropItem={'Tecnologia'}/>
            <DropItem dropItem={'Moda'}/>
            <DropItem dropItem={'Jugetes'}/>
            <DropItem dropItem={'Indrustia oficina'}/>
        </div>
    );
}

export default SubMenu;