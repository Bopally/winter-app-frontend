import { useState, useEffect } from "react";
import "../styles/ImageCarousel.css";

import imageOne from "../styles/Images/AboutPage-image-one.jpg";
import imageTwo from "../styles/Images/AboutPage-image-two.jpg";
import imageThree from "../styles/Images/AboutPage-image-three.jpg";

const images = [imageOne, imageTwo, imageThree];

function ImageCarousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      <img
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex}`}
        className="carousel-image"
      />
    </div>
  );
}

export default ImageCarousel;
