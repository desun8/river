import React, { useState } from "react";
import Slider from "react-slick";

import { Wrapper, MainTitle, ServiceList, ButtonToSlider } from "./styled";
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

const serviceListItems = data.map(elm => <ListItem key={elm.id} {...elm} />);

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
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // appendDots: dots => <CustomDots>{dots}</CustomDots>,
    // customPaging: i => <Paging>{data[i].anchor}</Paging>,
    beforeChange: (oldIndex, newIndex) => {
      // setPrevSlide(oldIndex);
      setCurrentSlide(newIndex);
    }
  };

  // const handleClick = () => {
  //   setShow("slider");
  // };

  const showThis =
    show === "list" ? (
      <ServiceList>{serviceListItems}</ServiceList>
    ) : (
      <Slider ref={ref => (slider = ref)} {...settings}>
        {serviceSliderItems}
      </Slider>
    );

  return (
    <Wrapper className={props.isHome ? "section" : ""}>
      <MainTitle>Услуги</MainTitle>

      <ServiceList className={show === "list" ? "" : "hidden"}>
        {serviceListItems}
      </ServiceList>
      <ButtonToSlider
        className={show === "list" ? "" : "hidden"}
        onClick={() => setShow("slider")}
      >
        Слайдер
      </ButtonToSlider>

      <Slider
        className={show === "list" ? "hidden" : ""}
        ref={ref => (slider = ref)}
        {...settings}
      >
        {serviceSliderItems}
      </Slider>
      {/* <input
        style={{
          position: "absolute",
          left: "50%",
          bottom: "90px",
          transform: "translateX(-50%)"
        }}
        onChange={e => slider.slickGoTo(e.target.value)}
        value={currentSlide}
        type="range"
        min={0}
        max={3}
      /> */}

      {/* {show === "list" ? <p>LIST ELEMENTS</p> : <p>SLIDER ELEMENTS</p>}

      <button onClick={() => setShow("slider")}>click</button> */}
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
