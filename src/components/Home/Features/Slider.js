import React, { useEffect } from "react";

import { SliderList, SliderTitle, SliderWrapper } from "./styled";
import SliderItem from "./SliderItem";

import SliderSlick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import bgTest from "../../../img/features3.png";

const sliderData = [
  {
    title: "2 Плавательных бассейна",
    text: "А так же, безлимитный доступ к открытому бассейну",
    bg: bgTest
  },
  {
    title: "Персональный подход",
    text: "Персонализированное взаимодействие сотрудников и членов клуба",
    bg: bgTest
  },
  {
    title: "Эксклюзивное обслуживание",
    text: "Ориентированное на удовлетворение потребностей членов клуба.",
    bg: bgTest
  },
  {
    title: "2 Плавательных бассейна",
    text: "А так же, безлимитный доступ к открытому бассейну",
    bg: bgTest
  },
  {
    title: "Персональный подход",
    text: "Персонализированное взаимодействие сотрудников и членов клуба",
    bg: bgTest
  },
  {
    title: "Эксклюзивное обслуживание",
    text: "Ориентированное на удовлетворение потребностей членов клуба.",
    bg: bgTest
  },
  {
    title: "Персональный подход",
    text: "Персонализированное взаимодействие сотрудников и членов клуба",
    bg: bgTest
  },
  {
    title: "Эксклюзивное обслуживание",
    text: "Ориентированное на удовлетворение потребностей членов клуба.",
    bg: bgTest
  },
  {
    title: "2 Плавательных бассейна",
    text: "А так же, безлимитный доступ к открытому бассейну",
    bg: bgTest
  },
  // {
  //   title: "Персональный подход",
  //   text: "Персонализированное взаимодействие сотрудников и членов клуба",
  //   bg: bgTest
  // }
];

const sliderItems = sliderData.map((elm, index) => {
  const count = index < 9 ? `0${index + 1}` : index + 1;
  return <SliderItem key={index} props={{ ...elm, count }} />;
});

const Slider = () => {
  let slider;
  let title;
  let TITLE_MOVE = 2;
  let titleMoveCount = 0;

  const totalSliders = sliderData.length;

  // При отображение 3 слайдов
  const isLastSlideIndex = (current, total) => {
    const row = 3;
    return total - row === current;
  }

  const settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    afterChange: current => {
      console.log(isLastSlideIndex(current, totalSliders));
    },
  };

  const handleScroll = e => {
    if (e.deltaY > 0) {
      titleMoveCount = titleMoveCount + 1;
      slider.slickNext();

      title.style.transform = `translateX(${TITLE_MOVE}%)`
      TITLE_MOVE = TITLE_MOVE + 2;
    } else {
      titleMoveCount = titleMoveCount <= 0 ? 0 : titleMoveCount - 1;
      slider.slickPrev();

      title.style.transform = titleMoveCount < 1 ? '' : `translateX(${TITLE_MOVE}%)`
      TITLE_MOVE = TITLE_MOVE - 2;
    }
  };

  return (
    <SliderWrapper onWheel={e => handleScroll(e)}>
      <SliderTitle ref={e => title = e}>Особенности</SliderTitle>
      {/* <SliderList> */}

      <SliderSlick ref={sliderSlick => (slider = sliderSlick)} {...settings}>
        {sliderItems}
      </SliderSlick>
      {/* </SliderList> */}
    </SliderWrapper>
  );
};

export default Slider;
