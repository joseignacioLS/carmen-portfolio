import { useEffect, useRef, useState } from "react";
import styles from "./Carousel.module.scss";
import Button from "./core/Button";

interface IProps {
  images: string[];
}

const Carousel = ({ images }: IProps) => {
  const carouselRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isLeftControlDisabled, setIsLeftControlDisabled] = useState(true);
  const [isRightControlDisabled, setIsRightControlDisabled] = useState(true);

  const handleSlideChange = (direction: number = 1) => {
    const carouselEle = carouselRef.current as any;
    if (!carouselEle) return;
    carouselEle.scrollTo({
      left: direction * carouselEle.offsetWidth + carouselEle.scrollLeft,
    });
  };

  const handleScroll = () => {
    const carouselEle = carouselRef.current as any;
    if (!carouselEle) return;
    if (carouselEle.scrollLeft > 0) {
      setIsLeftControlDisabled(false);
    } else {
      setIsLeftControlDisabled(true);
    }
    if (
      carouselEle.scrollLeft <
      carouselEle.scrollWidth - carouselEle.offsetWidth - 1
    ) {
      setIsRightControlDisabled(false);
    } else {
      setIsRightControlDisabled(true);
    }
    setCurrentSlide(
      Math.round(
        (images.length * carouselEle.scrollLeft) / carouselEle.scrollWidth
      ) + 1
    );
  };

  useEffect(() => {
    handleScroll();
  }, []);

  return (
    <div className={styles.wrapper}>
      <div
        ref={carouselRef}
        className={styles.carousel}
        onScroll={() => handleScroll()}
      >
        {images.map((src) => {
          return (
            <div key={src} className={styles.slide}>
              <img src={src} />
            </div>
          );
        })}
      </div>
      <div className={styles.slideCounter}>
        <span>{`${currentSlide} / ${images.length}`}</span>
      </div>
      <div className={styles.controls}>
        <Button
          disabled={isLeftControlDisabled}
          onClick={() => {
            handleSlideChange(-1);
          }}
        ></Button>
        <Button
          disabled={isRightControlDisabled}
          onClick={() => {
            handleSlideChange(1);
          }}
        ></Button>
      </div>
    </div>
  );
};

export default Carousel;
