import { useState, useEffect } from 'react';
import { projects } from './Data';

const Carousel = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselInfiniteScroll = () => {
    if (currentIndex === projects.length - 1) {
      return setCurrentIndex(0);
    }
    return setCurrentIndex(currentIndex + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      carouselInfiniteScroll();
    }, 3000);
    //Clean Up function
    return () => clearInterval(interval);
  });

  return <div className='flex overflow-hidden'>{props.children}</div>;
};

export default Carousel;
