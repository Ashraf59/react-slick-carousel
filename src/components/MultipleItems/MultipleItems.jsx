import Slider from 'react-slick';
import './multipleItems.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img1 from '../../assets/carousel-img/nature-1.jpg'
import img2 from '../../assets/carousel-img/nature-2.jpg'
import img3 from '../../assets/carousel-img/nature-3.jpg'
import img4 from '../../assets/carousel-img/nature-4.jpg'
import img5 from '../../assets/carousel-img/nature-5.jpg'
import img6 from '../../assets/carousel-img/nature-6.jpg'

const MultipleItems = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <div className='mutipleCarousel'>
        
        <Slider {...settings}>
          <div className='multiple'>
          <img src={img1} alt="" />
          </div>
          <div className='multiple'>
          <img src={img2} alt="" />
          </div>
          <div className='multiple'>
          <img src={img3} alt="" />
          </div>
          <div className='multiple'>
          <img src={img4} alt="" />
          </div>
          <div className='multiple'>
          <img src={img5} alt="" />
          </div>
          <div className='multiple'>
          <img src={img6} alt="" />
          </div>
          <div className='multiple'>
          <img src={img6} alt="" />
          </div>
          <div className='multiple'>
          <img src={img1} alt="" />
          </div>
          <div className='multiple'>
          <img src={img3} alt="" />
          </div>
        </Slider>
      </div>
    );
};

export default MultipleItems;