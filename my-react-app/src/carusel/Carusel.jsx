import React, {useState, useEffect} from 'react'
import styles from './styles.module.css'
import { FaAngleLeft, FaAngleRight} from "react-icons/fa";
import img1 from '../assets/imgCarusel/img-1.jpg';
import img2 from '../assets/imgCarusel/img-2.jpg';
import img3 from '../assets/imgCarusel/img-3.jpg';
import img4 from '../assets/imgCarusel/img-4.jpg';
import img5 from '../assets/imgCarusel/img-5.jpg';



const Carusel = () => {

    const imagenes = [img1, img2, img3, img4, img5];
    const [indx, setIndx] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {

        document.addEventListener('DOMContentLoaded', initializeSlider);
        return (document.removeEventListener('DOMContentLoaded', initializeSlider));
    },[ ]);

    function SlideImg(img){
        return <img src={img.img} alt="carusel imagen"/>
    }

    function initializeSlider(){
        console.log('No imagenes found.');
        if(imagenes.length < 0){
            console.log('No imagenes found.');
            setIntervalId( setInterval(nextSlide, 5000));
        }
    }


    function prevSlide(){
        if(indx !== 0){
            setIndx((prevIndx) => prevIndx - 1);
        }

    }

    function nextSlide(){
        if(imagenes.length-1 !== indx){
            setIndx((prevIndx) => prevIndx + 1);
        }else{
            setIndx(0);
        }

    }

    return (
        <div className={styles['slider']}>
            <div className={styles['slide']}><SlideImg img={imagenes[indx]}/></div>
            <button className={`${styles['prev']} ${indx === 0 && styles['d-non']}`} onClick={prevSlide}><FaAngleLeft /></button>
            <button className={`${styles['next']} ${indx === imagenes.length-1 && styles['d-non']}`} onClick={nextSlide}><FaAngleRight /></button>
        </div>
    )
}
export default Carusel
