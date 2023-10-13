import React, { useState, useEffect, useCallback } from "react";
import { PrevButton, NextButton } from "./EmblaCarouselButtons";
import useEmblaCarousel from "embla-carousel-react";
import { mediaByIndex } from "../media/media";
import "../scss/embla.scss";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
const Carousel = ({ slides }) => {
  if (!slides) {
    return null;
  }
  const [viewportRef, embla] = useEmblaCarousel({
    containScroll: "trimSnaps",
    dragFree: true,
    slidesInView: 1,
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isLastSlide, setIsLastSlide] = useState(false); // State to track if it's the last slide

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());

    setIsLastSlide(embla.selectedScrollSnap() === slides.length - 1);
  }, [embla, slides]);

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
        <div
          className="embla__viewport"
          ref={viewportRef}
          style={{ height: "28rem" }}
        >
          <div className="embla__container">
            {slides.map((slide, index) => (
              <div
                className="embla__slide"
                key={index}
                style={{
                  width: "100%",
                  display: "grid",
                  gridTemplateColumns: "0.25fr 0.5fr",
                  justifyContent: "center",
                }}
              >
                <div
                  className="embla__slide__detai"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1px",
                  }}
                >
                  <h2>{slide.definition}</h2>
                  <h5 style={{ margin: "0px" }}>{slide.title}</h5>
                  <span>{slide.description}</span>
                  <span>{slide.description1}</span>
                  <span>{slide.description2}</span>
                  <span>{slide.description3}</span>
                  <span>{slide.description4}</span>
                  <span>{slide.description5}</span>
                  <span>{slide.description6}</span>
                  <span>{slide.description7}</span>
                  <span>{slide.description8}</span>
                  <span>{slide.description9}</span>
                </div>
                <div className="embla__slide__inner">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="588"
                    height="591"
                    viewBox="0 0 588 591"
                    fill="none"
                    style={{
                      left: "30%",
                      width: "25rem",
                      position: "relative",
                    }}
                  >
                    <path
                      d="M69.211 329.403C115.733 276.845 64.9034 165.266 10.6278 97.6291C-12.1888 69.1957 -3.15645 21.0315 86.4413 5.86705C176.039 -9.29737 190.398 7.30303 232.038 28.6998C273.678 50.0966 378.237 82.2061 463.355 39.47C548.473 -3.26608 562.286 110.984 558.552 173.451C555.128 230.748 518.578 280.55 558.552 359.129C598.527 437.708 609.382 515.834 515.907 490.525C437.94 469.416 384.612 452.701 272.96 544.376C161.307 636.052 41.0282 574.533 24.8429 513.358C13.7868 471.57 11.8542 394.203 69.211 329.403Z"
                      fill="#A8DADC"
                    />
                  </svg>
                  <img
                    className="embla__slide__img"
                    src={mediaByIndex(index)}
                    style={{
                      left: "30%",
                      width: "25rem",
                      position: "absoulute",
                    }}
                  />
                  {isLastSlide && (
                    <span>hfhfh</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </div>
      {isLastSlide && (
        <div
          className="btn__finish"
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Button
            // variant="contained"
            // style={{ background: "#1D3557", color: "white" }}
          >
            <Link to="/aboutCourse/overallSE/definitionSE/homework" style={{ borderRadius: "4px"}}>
              Finish
            </Link>
          </Button>
        </div>
      )}
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
