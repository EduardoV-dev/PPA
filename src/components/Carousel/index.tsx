import React from 'react';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from '../../icons';
import useCarousel from './useCarousel';
import styles from './carousel.module.scss';
import cn from 'classnames';

interface ICarousel {
  imagesURL: string[];
  className?: string;
}

const Carousel: React.FC<ICarousel> = ({
  imagesURL,
  className,
}): JSX.Element => {
  const {
    current,
    nextSlide,
    prevSlide,
    goToSlide,
  } = useCarousel(imagesURL);
  const carouselClassNames = cn(styles.carousel, className);

  return (
    <div className={carouselClassNames}>
      <button
        className={styles.carousel__controller}
        onClick={prevSlide}
      >
        <ChevronLeftIcon />
      </button>
      <button
        className={styles.carousel__controller}
        onClick={nextSlide}
      >
        <ChevronRightIcon />
      </button>
      {imagesURL.map((url, idx) => (
        <div
          key={idx}
          className={
            `${styles.carousel__slide} ${idx === current && styles.carousel__slide_active}`
          }
        >
          {idx === current && (
            <img
              src={url}
              alt={`Carousel item #${idx + 1}`}
              className={styles.carousel__image}
            />
          )}
        </div>
      ))}
      <div className={styles.carousel__indicators_container}>
        {imagesURL.map((url, idx) => (
          <div
            key={url}
            className={`
              ${styles.carousel__indicator} ${idx === current && styles.carousel__indicator_active}
            `}
            onClick={() => goToSlide(idx)}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;