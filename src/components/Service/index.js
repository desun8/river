import React, { useState } from "react";
import Slider from "react-slick";

import debounce from "debounce";

import {
  Wrapper,
  MainTitle,
  ServiceList,
  ButtonToSlider,
  InnerWrapper,
  ButtonToList,
  SliderControl,
  SliderRange,
  ListWrapper,
  SliderWrapper
} from "./styled";
import ListItem from "./ListItem";

import { BtnNext, BtnPrev } from "../Home/NavBtnFullpage";
import SliderItem from "./SliderItem";

import club from "../../img/service-club.jpg";
import clubBg from "../../img/service-club-bg.png";
import clubImg from "../../img/service-club-img.png";

import fitnes from "../../img/service-fitnes.jpg";
import fitnesBg from "../../img/service-fitnes-bg.png";
import fitnesImg from "../../img/service-fitnes-img.png";

import spa from "../../img/service-spa.jpg";
import spaBg from "../../img/service-spa-bg.png";
import spaImg from "../../img/service-spa-img.png";

import cafe from "../../img/service-cafe.jpg";
import cafeBg from "../../img/service-cafe-bg.png";
import cafeImg from "../../img/service-cafe-img.png";
import { hidden } from "ansi-colors";

const data = [
  {
    id: "1",
    title: "О Клубе",
    url: "about",
    bgImg: club,
    innerBg: clubBg,
    innerImg: clubImg,
    html:
      "<blockquote class='blockquote'>Ривер Клуб - это уникальный спортивный комплекс бизнес-класса, расположенный в центальной цасти Хабаровска. Его площадь составляет 4200 м2.За время работы клуб стал любимым местом отдыха от городской суеты для тех, кто любит себя, свое тело и здоровый образ жизни.</blockquote>",
    list: [
      { id: "1", name: "Мероприятия клуба", url: "" },
      { id: "2", name: "Фото / видео отчеты", url: "" },
      { id: "3", name: "Акции", url: "" }
    ]
  },
  {
    id: "2",
    title: "Фитнес",
    url: "fitnes",
    bgImg: fitnes,
    innerBg: fitnesBg,
    innerImg: fitnesImg,
    html:
      "<blockquote class='blockquote'>Ривер Клуб - это уникальный спортивный комплекс бизнес-класса, расположенный в центальной цасти Хабаровска. Его площадь составляет 4200 м2. За время работы клуб стал любимым местом отдыха от городской суеты для тех, кто любит себя, свое тело и здоровый образ жизни.</blockquote>",
    list: [
      { id: "1", name: "Единоборства", url: "" },
      { id: "2", name: "Тренажерный зал", url: "" },
      { id: "3", name: "Групповые тренировки", url: "" },
      { id: "4", name: "Водные программы", url: "" },
      { id: "5", name: "Детский Клуб", url: "" }
    ]
  },
  {
    id: "3",
    title: "SPA",
    url: "spa",
    bgImg: spa,
    innerBg: spaBg,
    innerImg: spaImg,
    html:
      "<p>В современном понимании SPA – это процедуры для оздоровления организма, в которых используется вода во всех ее проявлениях – от обертывания морскими водорослями и солевых пилингов до термальных ванн.</p><p>Но СПА сегодня – не только и не столько косметологическая процедура, сколько целый ритуал, направленный на освобождение от шлаков, омоложение и улучшение состояния кожи, активизацию обменных процессов в организме в целом.</p>",
    list: null
  },
  {
    id: "4",
    title: "Кафе",
    url: "cafe",
    bgImg: cafe,
    innerBg: cafeBg,
    innerImg: cafeImg,
    html:
      "<p>Кафе “Прокофье” понравится людям, которые любят атмосферу европейского отдыха. Здесь собираются те, кто ценит современный формат жизни в большом городе и привык проводить время с пользой.</p><p>Внутри тихо и непринужденно: за столиком у окна можно спокойно поработать, а вечером  — назначить встречу с близким человеком или старыми друзьями.</p>",
    list: null
  }
];

// const serviceListItems = data.map(elm => <ListItem key={elm.id} {...elm} />);

const serviceSliderItems = data.map(elm => (
  <SliderItem key={elm.id} {...elm}>
    <img className="bg" src={elm.innerBg} alt="" />
    <img className="img" src={elm.innerImg} alt="" />
  </SliderItem>
));

const Service = props => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [show, setShow] = useState("list");

  let slider = null;
  let inputRange;

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
    // dots: true,
    speed: 2000,
    easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    slidesToShow: 1,
    slidesToScroll: 1,
    // appendDots: dots => <CustomDots>{dots}</CustomDots>,
    // customPaging: i => <Paging>{data[i].anchor}</Paging>,
    beforeChange: (oldIndex, newIndex) => {
      // setPrevSlide(oldIndex);
      setCurrentSlide(newIndex);
    }
  };

  const handleClickGoToSlide = (index, dontAnimate = true) => {
    if (slider) {
      slider.slickGoTo(index, dontAnimate);
      inputRange.value = indexToValue(index);
      setShow("slider");
      console.log("go to");
    }
  };

  const serviceListItems = data.map((elm, index) => (
    <ListItem
      key={elm.id}
      onClick={() => handleClickGoToSlide(index)}
      {...elm}
    />
  ));

  // const sliderLength = serviceListItems.length - 1;

  const indexToValue = curr => {
    switch (curr) {
      case 0:
        return 0;
      case 1:
        return 350;
      case 2:
        return 650;
      case 3:
        return 1000;
      default:
        break;
    }
  };

  const valueToIndex = curr => {
    if (curr <= 350 / 2) return 0;
    if (curr > 350 / 2 && curr <= 500) return 1;
    if (curr > 500 && curr <= 350 / 2 + 650) return 2;
    if (curr > 1000 - 350 / 2) return 3;
  };

  return (
    <Wrapper className={props.isHome ? "section" : ""}>
      <MainTitle>Услуги</MainTitle>
      <InnerWrapper>
        <ListWrapper pose={show === "list" ? "visible" : "hidden"}>
          <ServiceList>{serviceListItems}</ServiceList>
          <ButtonToSlider onClick={() => setShow("slider")}>
            Слайдер
          </ButtonToSlider>
        </ListWrapper>

        <SliderWrapper pose={show === "list" ? "hidden" : "visible"}>
          <Slider ref={ref => (slider = ref)} {...settings}>
            {serviceSliderItems}
          </Slider>

          <SliderControl>
            <ButtonToList onClick={() => setShow("list")}>Сетка</ButtonToList>
            <SliderRange
              ref={ref => (inputRange = ref)}
              onChange={e => {
                if (valueToIndex(e.target.value) !== currentSlide) {
                  slider.slickGoTo(valueToIndex(e.target.value));
                }
              }}
              // value={indexToValue(currentSlide)}
              // length={sliderLength}
              length={1000}
            />
          </SliderControl>
        </SliderWrapper>
      </InnerWrapper>

      <BtnNext name={props.nextBlockName} toDown={moveSectionDown} />
      <BtnPrev toUp={moveSectionUp} />
    </Wrapper>
  );
};

// Wrapper
// Title
// ServiceList
//   List
// BtnToSlider
// Slider
//   SliderItems

export default Service;
