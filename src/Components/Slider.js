import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap'
import slider1 from "../images/slider-99.png";
import slider2 from "../images/slider-2.png";
import slider3 from "../images/slider-22.png";
import slider4 from "../images/slider-33.png";
import './Slider.css'

const Silder = () => {
    const [index, setIndex] = useState(0)
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex)
    }
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item className="slider-background" interval={1500}>
                <div className="d-flex flex-row justify-content-center align-items-center">
                    <img
                        style={{ height: "600px", width: "500px" }}
                        className=""
                        src={slider1}
                        alt="First slide"
                    />
                    <div className="">
                        <h3 className="slider-title">هناك خصم كبير</h3>
                        <p className="slider-text">خصم يصل ٥٠٪ عند شرائك</p>
                    </div>
                </div>
            </Carousel.Item>

            <Carousel.Item className="slider-background2" interval={1500}>
                <div className="d-flex flex-row justify-content-center align-items-center">
                    <img
                        style={{ height: "600px", width: "500px" }}
                        className=""
                        src={slider2}
                        alt="First slide"
                    />
                    <div className="">
                        <h3 className="slider-title">هناك خصم كبير</h3>
                        <p className="slider-text">خصم يصل ٥٠٪ عند شرائك</p>
                    </div>
                </div>
            </Carousel.Item>

            <Carousel.Item className="slider-background3" interval={1500}>
                <div className="d-flex flex-row justify-content-center align-items-center">
                    <img
                        style={{ height: "600px", width: "500px" }}
                        className=""
                        src={slider3}
                        alt="First slide"
                    />
                    <div className="">
                        <h3 className="slider-title">هناك خصم كبير</h3>
                        <p className="slider-text">خصم يصل ٥٠٪ عند شرائك</p>
                    </div>
                </div>
            </Carousel.Item>

            <Carousel.Item className="slider-background4" interval={1500}>
                <div className="d-flex flex-row justify-content-center align-items-center">
                    <img
                        style={{ height: "600px", width: "500px" }}
                        className=""
                        src={slider4}
                        alt="First slide"
                    />
                    <div className="">
                        <h3 className="slider-title">هناك خصم كبير</h3>
                        <p className="slider-text">خصم يصل ٥٠٪ عند شرائك</p>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    )
}
export default Silder
