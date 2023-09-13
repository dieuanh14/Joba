import React, { useState, useEffect, useCallback } from "react";
import { PrevButton, NextButton } from "../js/EmblaCarouselButtons";
import useEmblaCarousel from "embla-carousel-react";
import { mediaByCourse } from "../media/course";
import "../scss/carousel.scss";
import media2 from "../assets/img/3d-casual-life-young-man-with-laptop-computer-working-at-home-office.png";
import media1 from "../assets/img/3d-casual-life-young-man-sitting-with-a-laptop-and-waving-his-hand.png";
import media3 from "../assets/img/casual-life-3d-side-view-of-young-woman-sitting-and-waving-at-robot.png";

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
            {slides.map((slide, course) => (
              <div
                className="embla__slide"
                // key={course}
                style={{ width: "100%" }}
              >
                <div className="embla__slide__inne">
                  <img className="embla__slide__im" src={media1} />
                  <div className="embla__slide__detai">
                    <h3>Beginning</h3>
                    <span>Video: Giới thiệu ngành học </span>
                    <span>Bài đọc: Những điều cần biết về Kỹ thuật phần mềm</span>
					<span>Bài tập: Câu hỏi thắc mắc về ngành học </span>

                  </div>
                </div>
                <div className="embla__slide__inne">
                  <img className="embla__slide__im" src={media2} />
                  <div className="embla__slide__detai">
				  <h3>Overall</h3>
                    <span>Video: Làm quen với coding </span>
                    <span>Bài đọc: Những điều cần biết về coding và phần mềm</span>
					<span>Bài tập: Câu hỏi thắc mắc về bài học</span>

                  </div>
                </div>
				<div className="embla__slide__inne">
                  <img className="embla__slide__im" src={media1} />
                  <div className="embla__slide__detai">
                    <h3>Beginning</h3>
                    <span>Video: Giới thiệu ngành học </span>
                    <span>Bài đọc: Những điều cần biết về Kỹ thuật phần mềm</span>
					<span>Bài tập: Câu hỏi thắc mắc về ngành học </span>

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
