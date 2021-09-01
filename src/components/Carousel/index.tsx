import { RefObject } from "react";
import KeenSlider from "keen-slider";
import { Arrow } from "./components/Arrow";

import "keen-slider/keen-slider.min.css";
import styles from "./styles.module.css";

interface CarouselProps {
  sliderRef: RefObject<HTMLDivElement>;
  slider: KeenSlider;
  currentSlide: number;
}

export function Carousel({ sliderRef, slider, currentSlide }: CarouselProps) {
  return (
    <>
      <div className={styles.navigationWrapper}>
        <div ref={sliderRef} className={`keen-slider ${styles.keenSlider}`}>
          <div className={`keen-slider__slide ${styles.numberSlide1}`} />
          <div className={`keen-slider__slide ${styles.numberSlide2}`} />
          <div className={`keen-slider__slide ${styles.numberSlide3}`} />
          <div className={`keen-slider__slide ${styles.numberSlide4}`} />
        </div>
        {slider && (
          <>
            <Arrow
              onClick={(e: Event | any) => e.stopPropagation() || slider.prev()}
              disabled={currentSlide === 0}
              direction="left"
            />
            <Arrow
              direction="right"
              onClick={(e: Event | any) => e.stopPropagation() || slider.next()}
              disabled={currentSlide === slider.details().size - 1}
            />
          </>
        )}
      </div>
      {slider && (
        <div className={styles.dots}>
          {[...Array(slider.details().size).keys()].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  slider.moveToSlideRelative(idx);
                }}
                className={
                  `${styles.dot}` +
                  (currentSlide === idx ? ` ${styles.active}` : "")
                }
              />
            );
          })}
        </div>
      )}
    </>
  );
}
