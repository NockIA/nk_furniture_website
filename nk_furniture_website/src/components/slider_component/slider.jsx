import './slider.css'
import '../../global_css/global.css'

import { useEffect,useState } from 'react'
import axios from 'axios'

 export const Slider = (props) => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
          setScreenWidth(window.innerWidth);
        };      
        window.addEventListener('resize', handleResize);
    
    }, [screenWidth]);
    useEffect (() => {
        axios.get("/api/Data").then((response) => setResult(JSON.parse(response.data)))
        .catch(console.error)
    }, [])
    const [result, setResult] = useState([])
    const [currentProduct,setCurrentProduct] = useState(props.slider)
    const allKeys = Object.keys(result)
    const [currentKey,setCurrentKey] = useState(0)
    
    useEffect(() => {
        if (result !== undefined && result.length !== 0) {
            setCurrentProduct(result[(Object.keys(result)[currentKey])]);
        }
      }, [result, currentProduct,currentKey]);
    return (
        <div className='columnContainer containerSlider'>
            <div className='containerFirstRow'>
                {screenWidth < 1400 && <img className='imgMobile' src={currentProduct.imgSrcMobile} alt="product_img" />}
                {screenWidth >= 1400 &&<img src={currentProduct.imgSrcDesktop} alt="product_img" />}
                <div className='columnContainer containerGlobalProduct'>
                    <div className='columnContainer containerProductInfos'>
                        <h1 className='titleProduct'>{currentProduct.title}</h1>
                        <h3>{currentProduct.description}</h3>
                        <a href="">
                            <div className='rowContainer containerShopbtn'>
                                <h2>SHOP NOW</h2>
                                <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z" fill="#000" fillRule="nonzero"/></svg>
                            </div>
                        </a>
                    </div>
                    <div className='rowContainer sliderContainer'>
                        <span className='sliderBtn' onClick={() => setCurrentKey((currentKey+5) % 3)}>
                            <svg width="14" height="24"  xmlns="http://www.w3.org/2000/svg"><path d="M13 0L1 12l12 12" stroke="#FFF" fill="none" fillRule="evenodd"/></svg>
                        </span>
                        <span className='sliderBtn' onClick={() => setCurrentKey((currentKey+1) % 3)}>
                            <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M1 0l12 12L1 24" stroke="#FFF" fill="none" fillRule="evenodd"/></svg>
                        </span>
                    </div>
                </div>
            </div>
            <div className='containerAbout'>
                <img className='aboutImages imgMobile' src="./src/assets/images/image-about-dark.jpg" alt="about_dark_img" />
                <div className='columnContainer containerAboutDescp'>
                    <h2 className='titleAbout'>About our furniture</h2>
                    <h3> Our multifunctional collection blends design and function to suit your individual taste.
                    Make each room unique, or pick a cohesive theme that best express your interests and what
                    inspires you. Find the furniture pieces you need, from traditional to contemporary styles
                    or anything in between. Product specialists are available to help you create your dream space.
                    </h3>
                </div>
                <img className='aboutImages imgMobile' src="./src/assets/images/image-about-light.jpg" alt="about_light_img" />    
            </div>
        </div>
    )
 }