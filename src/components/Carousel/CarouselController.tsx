import { Carousel } from ".";
import { useKeenSlider } from "keen-slider/react";
import { useEffect, useState } from "react";

export function CarouselController() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [timeOutId, setTimeOutId] = useState<any>(null);
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
    duration: 1000,
    loop: true,
  });
  
  useEffect(() => {
    clearTimeout(timeOutId);
    if (slider !== null) {
      const id = setTimeout(() => {
        slider.next();
      }, 3000);
      setTimeOutId(id);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slider, currentSlide]);

  return (
    <Carousel
      currentSlide={currentSlide}
      sliderRef={sliderRef}
      slider={slider}
      timeOutId={timeOutId}
    />
  );
}
