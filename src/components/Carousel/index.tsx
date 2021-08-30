import { Arrow } from "./components/Arrow";

import styled from "./styles.module.scss";

interface CarouselProps {
  sliderRef: any;
  slider: any;
  currentSlide: any;
}

export function Carousel({ sliderRef, slider, currentSlide }: CarouselProps) {
  return (
    <>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide1" />
          <div className="keen-slider__slide number-slide2" />
          <div className="keen-slider__slide number-slide3" />
          <div className="keen-slider__slide number-slide4" />
        </div>
        {slider && (
          <>
            <Arrow
              onClick={(e) => e.stopPropagation() || slider.prev()}
              disabled={currentSlide === 0}
              direction="left"
            />
            <Arrow
              direction="right"
              onClick={(e) => e.stopPropagation() || slider.next()}
              disabled={currentSlide === slider.details().size - 1}
            />
          </>
        )}
      </div>
      {slider && (
        <div className="dots">
          {[...Array(slider.details().size).keys()].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  slider.moveToSlideRelative(idx);
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              />
            );
          })}
        </div>
      )}
    </>
  );
}
