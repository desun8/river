import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SliderItem from "./SliderItem";
import { SliderWrapper } from "./styled";
import SliderTitle from "../../styled/articleTitle";

import { BtnNext, BtnPrev } from "../NavBtnFullpage";

import moveTitle from "../../utils/moveTitle";
import BgWrapper from "../../styled/defaultArticleBg";

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
  }
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

const Wrapper = styled(BgWrapper)`
  position: relative;
  display: flex;
  align-items: center;
`;

const Features = props => {
  const [sliderIndex, setSliderIndex] = useState(null);
  const [oldSliderIndex, setOldSliderIndex] = useState(null);

  useEffect(() => {
    moveTitle(
      elmTitle,
      totalSliders,
      sliderIndex,
      oldSliderIndex,
      isLastSlideIndex(sliderIndex, totalSliders),
      3
    );
  }, [sliderIndex, oldSliderIndex]);

  let slider;
  let elmTitle;
  const totalSliders = sliderData.length;

  // fullpage.js methods
  const setAllowScrolling = props.fullpage
    ? props.fullpage.setAllowScrolling
    : null;
  const moveSectionDown = props.fullpage
    ? props.fullpage.moveSectionDown
    : null;
  const moveSectionUp = props.fullpage ? props.fullpage.moveSectionUp : null;

  // параметры слайдера
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => {
      setOldSliderIndex(oldIndex);
      setSliderIndex(newIndex);
    }
  };

  // При отображение 3 слайдов
  const isLastSlideIndex = (current, total) => {
    const row = 3;
    return total - row === current;
  };

  const handleScroll = e => {
    if (e.deltaY > 0) {
      slider.slickNext();

      // console.log(`curr: ${sliderIndex}, total: ${totalSliders}`)
      // Активируем прокрутку fullpage
      if (isLastSlideIndex(sliderIndex, totalSliders)) {
        setAllowScrolling(true);
      }
    } else {
      slider.slickPrev();

      // Активируем прокрутку fullpage
      if (sliderIndex === 0) {
        setAllowScrolling(true);
      }
    }
  };

  return (
    <Wrapper className="section">
      <SliderTitle ref={e => (elmTitle = e)}>Особенности</SliderTitle>
      <SliderWrapper onWheel={e => handleScroll(e)}>
        <Slider ref={sliderSlick => (slider = sliderSlick)} {...settings}>
          {sliderItems}
        </Slider>
      </SliderWrapper>
      <BtnNext name={props.nextBlockName} toDown={moveSectionDown} />
      <BtnPrev toUp={moveSectionUp} />
    </Wrapper>
  );
};

export default Features;
