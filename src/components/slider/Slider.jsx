import React from 'react'
import ReactSlider from 'react-slick'
import css from './Slider.module.css'
import pizza from '../../assets/dodoPizza.webp'
import pizza2 from '../../assets/logo2.jpg'
import pizza3 from '../../assets/logo3.gif'
import pizza4 from '../../assets/logo4.webp'
import pizza5 from '../../assets/logo5.jpg'
import pizza6 from '../../assets/logo6.jpg'
import pizza7 from '../../assets/logo7.png'
import pizza8 from '../../assets/logo8.webp'
import pizza9 from '../../assets/logo9.jpg'
import pizza10 from '../../assets/logo10.webp'
import pizza11 from '../../assets/logo11.webp'
import pizza12 from '../../assets/logo12.jpg'


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}


function Slider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <div>
        <div className={css.container}>
        <ReactSlider {...settings}>
          <div>
            <img height={251} width={203} src={pizza} alt="pizza" />
          </div>
          <div>
          <img height={251} width={203} src={pizza2} alt="pizza" />
          </div>
          <div>
          <img height={251} width={203} src={pizza3} alt="pizza" />
          </div>
          <div>
          <img height={251} width={203} src={pizza4} alt="pizza" />
          </div>
          <div>
          <img height={251} width={203} src={pizza5} alt="pizza" />
          </div>
          <div>
          <img height={251} width={203} src={pizza6} alt="pizza" />
          </div>
          <div>
          <img height={251} width={203} src={pizza7} alt="pizza" />
          </div>
          <div>
          <img height={251} width={203} src={pizza8} alt="pizza" />
          </div>
          <div>
          <img height={251} width={203} src={pizza9} alt="pizza" />
          </div>
          <div>
          <img height={251} width={203} src={pizza10} alt="pizza" />
          </div>
          <div>
          <img height={251} width={203} src={pizza11} alt="pizza" />
          </div>
          <div>
          <img height={251} width={203} src={pizza12} alt="pizza" />
          </div>
        </ReactSlider>
        </div>
      </div>
  )
}

export default Slider













