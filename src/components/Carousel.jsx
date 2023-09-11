import React, { useState, useEffect, useCallback } from "react";
import { PrevButton, NextButton } from "../js/EmblaCarouselButtons";
import useEmblaCarousel from "embla-carousel-react";
import { mediaByIndex } from "../media";
import "../scss/carousel.scss";
const Carousel = ({ slides }) => {
  if (!slides) {
    return null; // or handle the absence of slides appropriately
  }
  const [viewportRef, embla] = useEmblaCarousel({
    containScroll: "trimSnaps",
    dragFree: true,
    slidesInView: 1,
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  const onScroll = useCallback(() => {
    if (!embla) return;
    const progress = Math.max(0, Math.min(10, embla.scrollProgress()));
    setScrollProgress(progress * 100);
  }, [embla, setScrollProgress]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    onScroll();
    embla.on("select", onSelect);
    embla.on("scroll", onScroll);
  }, [embla, onSelect, onScroll]);

  return (
    <>
      <div className="embla">
        <h1>Software Engeneering</h1>
        <div className="carousel__viewport" ref={viewportRef}>
          <div className="embla__container">
            {slides.map((slide, index) => (
              <div
                className="embla__slide"
                key={index}
                style={{ width: "100%" }}
              >
                <div className="embla__slide__inne">
                  <img
                    className="embla__slide__im"
                    src={mediaByIndex(index)}
                  />
                  <div className="embla__slide__detai">
                    <h3>{slide.title}</h3>
                    <span>{slide.description}</span>
                    <span>{slide.description1}</span>
                    <span>{slide.description2}</span>
                    <span>{slide.description3}</span>
                    {/* <button >{slide.home}</button> */}
                  </div>
                </div>
				<div className="embla__slide__inne">
                  <img
                    className="embla__slide__im"
                    src={mediaByIndex(index)}
                  />
                  <div className="embla__slide__detai">
                    <h3>{slide.title}</h3>
                    <span>{slide.description}</span>
                    <span>{slide.description1}</span>
                    <span>{slide.description2}</span>
                    <span>{slide.description3}</span>
                    {/* <button >{slide.home}</button> */}
                  </div>
                </div>
				<div className="embla__slide__inne">
                  <img
                    className="embla__slide__im"
                    src={mediaByIndex(index)}
                  />
                  <div className="embla__slide__detai">
                    <h3>{slide.title}</h3>
                    <span>{slide.description}</span>
                    <span>{slide.description1}</span>
                    <span>{slide.description2}</span>
                    <span>{slide.description3}</span>
                    {/* <button >{slide.home}</button> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </div>
      <div className="embla__progress">
        <div
          className="embla__progress__bar"
          style={{ transform: `translateX(${scrollProgress}%)` }}
        />
      </div>
    </>
  );
};

export default Carousel;
