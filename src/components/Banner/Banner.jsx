import image1 from "../../assets/Banner/1.webp";
import image2 from "../../assets/Banner/2.jpg";
import image3 from "../../assets/Banner/3.jpg";
import image4 from "../../assets/Banner/4.webp";
import image5 from "../../assets/Banner/5.jpg";

// import AwesomeSlider from 'react-awesome-slider';
// import 'react-awesome-slider/dist/styles.css';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    const imageStyle = {
        maxHeight: "650px", // Set the desired max height here
    };
    return (
        <Carousel>
                <div>
                <img src={image1} style={imageStyle}/> 
                </div>
                <div>
                <img src={image2} style={imageStyle}/>
                </div>
                <div>
                <img src={image3} style={imageStyle}/>
                </div>
                <div>
                <img src={image4} style={imageStyle}/>
                </div>
                <div>
                <img src={image5} style={imageStyle}/>
                </div>
                
            </Carousel>
  );
};

export default Banner;
