import React, { useEffect, useState } from 'react';
import homeloan1 from '../Images/homeloan1.jpg';
import homeloan2 from '../Images/homeloan2.jpg';
import homeloan3 from '../Images/homeloan3.jpg';

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    homeloan1,
    homeloan2,
    homeloan3
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(timer); // Cleanup on unmount
  }, [images.length]);

  return (
    <div style={styles.sliderContainer}>
      {images.map((src, index) => (
        <img
          key={index}
          className="mySlides"
          src={src}
          style={{
            ...styles.image,
            display: index === currentIndex ? 'block' : 'none',
          }}
          alt={`Slide ${index + 1}`}
        />
      ))}
    </div>
  );
}

const styles = {
  sliderContainer: {
    position: 'relative',
    width: '100%',
    height: '100vh', // Full height of the viewport
    overflow: 'hidden',
  },
  image: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '80%',
    height: '80%',
    objectFit: 'cover', // Ensures the image covers the container
    transform: 'translate(-50%, -50%)', // Center the image
  },
};

export default ImageSlider;
