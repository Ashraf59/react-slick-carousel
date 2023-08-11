import './singleItem.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import img1 from '../../assets/carousel-img/work-1.jpg'
import img2 from '../../assets/carousel-img/work-2.jpg'
import img3 from '../../assets/carousel-img/Work3.jpg'
import img4 from '../../assets/carousel-img/work4.jpg'
import img5 from '../../assets/carousel-img/work5.jpg'
import img6 from '../../assets/carousel-img/work07.jpg'

const SingleItem = () => {

    
        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1
        }
        
    return (
        <div className='singleItem'>
        
        <Slider {...settings}>
          <div className='img-size'>
           <img src={img1} alt="" />
          </div>
          <div className='img-size'>
          <img src={img2} alt="" />
          </div>
          <div className='img-size'>
          <img src={img3} alt="" />
          </div>
          <div className='img-size'>
          <img src={img4} alt="" />
          </div>
          <div className='img-size'>
          <img src={img5} alt="" />
          </div>
          <div className='img-size'>
          <img src={img6} alt="" />
          </div>
        </Slider>
      </div>
    );
};

export default SingleItem;