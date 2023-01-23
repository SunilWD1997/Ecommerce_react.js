import './slider.scss';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useState } from 'react';


const Slider = () => {

    const [currentSlide, setCurrentSlid] = useState(0);

    const imgs = [
        "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ]

    const prevSlide = () => {
        setCurrentSlid(currentSlide === 0 ? 2 : currentSlide - 1);
    }
    const forSlide = () => {
        setCurrentSlid(currentSlide === 2 ? 0 : currentSlide + 1);
    }

    // setInterval(()=>{forSlide() }, 5000);

    return (
        <div className="slider">
            <div className="container" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>

                {imgs.map((elem, indx) => {
                    return <img src={elem} alt="" key={indx} />
                })}

            </div>

            <div className="icons">
                <div className="icon" onClick={prevSlide}><FaArrowLeft /></div>
                <div className="icon" onClick={forSlide}><FaArrowRight /> </div>
            </div>

        </div>
    )
}

export default Slider