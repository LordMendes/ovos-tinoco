import { Carousel } from ".";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";

export function CarouselController() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
  });
  return (
    <Carousel
      currentSlide={currentSlide}
      sliderRef={sliderRef}
      slider={slider}
    />
  );
}
