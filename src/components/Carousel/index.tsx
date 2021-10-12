import { RefObject } from "react";
import KeenSlider from "keen-slider";
import { Arrow } from "./components/Arrow";

import "keen-slider/keen-slider.min.css";
import styles from "./styles.module.css";
import { useHistory } from "react-router-dom";

interface CarouselProps {
  sliderRef: RefObject<HTMLDivElement>;
  slider: KeenSlider;
  currentSlide: number;
  timeOutId: number;
}

export function Carousel({
  sliderRef,
  slider,
  currentSlide,
  timeOutId,
}: CarouselProps) {
  const { push } = useHistory();

  return (
    <>
      <div className={styles.navigationWrapper}>
        <div ref={sliderRef} className={`keen-slider ${styles.keenSlider}`}>
          <div
            className={`keen-slider__slide ${styles.numberSlide1}`}
            onClick={() => push("/institucional")}
          />
          <div
            className={`keen-slider__slide ${styles.numberSlide2}`}
            onClick={() => push("/receitas")}
          />
          <div
            className={`keen-slider__slide ${styles.numberSlide3}`}
            onClick={() => push("/produtos")}
          />
          <div
            className={`keen-slider__slide ${styles.numberSlide4}`}
            onClick={() => push("/institucional")}
          />
        </div>
        {slider && (
          <>
            <Arrow
              onClick={(e: Event | any) =>
                e.stopPropagation() || slider.prev() || clearTimeout(timeOutId)
              }
              direction="left"
            />
            <Arrow
              direction="right"
              onClick={(e: Event | any) =>
                e.stopPropagation() || slider.next() || clearTimeout(timeOutId)
              }
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
                  clearTimeout(timeOutId)
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
