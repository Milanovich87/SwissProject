

// @ts-ignore-start
import photo1 from '../../assets/imagesSlider/1.jpg';
// @ts-ignore-end
// @ts-ignore-start
import photo2 from '../../assets/imagesSlider/2.jpg';
// @ts-ignore-end
// @ts-ignore-start
import photo3 from '../../assets/imagesSlider/3.jpg';
// @ts-ignore-end
// @ts-ignore-start
import photo4 from '../../assets/imagesSlider/4.jpg';
// @ts-ignore-end
// @ts-ignore-start
import photo5 from '../../assets/imagesSlider/5.jpg';
// @ts-ignore-end
// @ts-ignore-start
import photo6 from '../../assets/imagesSlider/6.jpg';
// @ts-ignore-end


import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.scss'
import { Main } from '../Main/Main';
import { Worth } from '../Worth/Worth';

export default class SwipeToSlide extends Component {
    render() {
        const settings = {
            className: "center",
            autoplay: true,
            speed: 3000,
            autoplaySpeed: 3000,
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 2,
            swipeToSlide: true,
            variableWidth: true,
            variableHeight: true,

            adaptiveHeight: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 1190,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 830,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                }
            ],
            afterChange: function (index: any) {
                console.log(
                    `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
                );
            }
        };
        return (
            <>
                <Slider {...settings}>
                    <div>
                        <img src={photo1} />
                    </div>
                    <div>
                        <img src={photo2} />
                    </div>
                    <div>
                        <img src={photo3} />
                    </div>
                    <div>
                        <img src={photo4} />
                    </div>
                    <div>
                        <img src={photo5} />
                    </div>
                    <div>
                        <img src={photo6} />
                    </div>
                </Slider>
                <Main />
                <Worth />
            </>

        );
    }
}