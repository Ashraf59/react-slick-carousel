import Slider from 'react-slick';
import './fade.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Fade = () => {
    const settings = {
        
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        pauseOnHover: false
      };
    return (
        <div>

        <Slider {...settings}>
          <div className='slider slider-1'>
          <div className='slider-text'>
          <h4 className="text-light mb-3">Booked Now </h4>
          <h1 className="text-light mb-4">Next-gen speed unveiled</h1>
          </div>
          </div>

          <div className='slider slider-2'>
          <div className='slider-text'>
          <h4 className="text-light mb-3">Booked Now </h4>
          <h1 className="text-light mb-4">Next-gen speed unveiled</h1>
          </div>
          </div>

          <div className='slider slider-3'>
          <div className='slider-text'>
          <h4 className="text-light mb-3">Booked Now </h4>
          <h1 className="text-light mb-4">Next-gen speed unveiled</h1>
          </div>
          </div>

          <div className='slider slider-4'>
          <div className='slider-text'>
          <h4 className="text-light mb-3">Booked Now </h4>
          <h1 className="text-light mb-4">Next-gen speed unveiled</h1>
          </div>
          </div>

          <div className='slider slider-5'>
          <div className='slider-text'>
          <h4 className="text-light mb-3">Booked Now </h4>
          <h1 className="text-light mb-4">Next-gen speed unveiled</h1>
          </div>
          </div>
        </Slider>
      </div>
    );
};

export default Fade;