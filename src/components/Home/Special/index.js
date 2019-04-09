import React, { useState, useEffect } from "react";
import Slider from "react-slick";

import SliderItem from "./SliderItem";
import { CustomDots, Paging } from "./CustomSliderDots";
import {
  Wrapper,
  ImageBgAnimation,
  ImageFrontAnimation,
  ImageFrontAnimationWiFiLg,
  ImageFrontAnimationWiFiMd,
  ImageFrontAnimationWiFiSm,
  IconAnimation,
  ImageBraceAnimation
} from "./styled";
import SliderTitle from "../../styled/articleTitle.js";

import { BtnNext, BtnPrev } from "../NavBtnFullpage";

import moveTitle from "../../utils/moveTitle";

import SliderImages from "./images";

const data = [
  {
    id: 1,
    anchor: "Персональный браслет",
    title: "Персональный браслет",
    text:
      "Личный браслет хранит всю неободимую информацию о Вашем абонементе и позволяет беспрепятственно посещать и пользоваться услугами клуба.",
    url: "accessory"
  },
  {
    id: 2,
    anchor: "Свобода и доступность",
    title: "Свобода и доступность",
    text:
      "Никаких ключей, никаких списков. Вы можете беспрепятственно попасть в клуб при наличии браслета, а также все шкафчики оборудованы электронными замками.",
    url: "availability"
  },
  {
    id: 3,
    anchor: "Фитнес-тестирование",
    title: "Фитнес-тестирование",
    text:
      "Главным, ключевым отличием данного тестирования, является уникальная, специально разработанная система определения биологического возраста человека.",
    url: "testing"
  },
  {
    id: 4,
    anchor: "Бесплатные тренировки",
    title: "Тренировки с инструктором",
    text:
      "В течение 12 часов, после прохождения фитнес тестирования, вам позвонит выделенный вам инструктор и согласует удобное время для проведения первой бесплатной персональной тренировки.",
    url: "freeTraning"
  },
  {
    id: 5,
    anchor: "Мероприятия",
    title: "Мероприятия",
    text:
      "Мероприятия - это не скучно! Присоединяйся к нам, вливайся в правильную фитнес-тусовку! Мастер-классы по таким направлениям как: Zumba, Pump, Step, Aerobic, Antigravity Yoga, Yoga.",
    url: "events"
  }
];

// const sliderItems = data.map((elm, index) => {
//   switch (index) {
//     case 0:
//     case 2:
//       return (
//         <SliderItem key={elm.id} {...elm}>
//           <img className="bgImg" src={SliderImages[index].bg} alt="" />
//           <img
//             className={index === 0 ? "imgSlide1" : "imgSlide3"}
//             src={SliderImages[index].img}
//             alt=""
//           />
//         </SliderItem>
//       );

//     case 1:
//       return (
//         <SliderItem key={elm.id} {...elm}>
//           <img className="imgSlide2-1" src={SliderImages[index].img1} alt="" />
//           <img className="imgSlide2-2" src={SliderImages[index].img2} alt="" />
//           <img className="imgSlide2-3" src={SliderImages[index].img3} alt="" />
//         </SliderItem>
//       );

//     case 3:
//     case 4:
//       return (
//         <SliderItem key={elm.id} {...elm}>
//           <img className="bgImg" src={SliderImages[index].bg} alt="" />
//         </SliderItem>
//       );

//     default:
//       break;
//   }
// });

const Service = props => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState(0);
  const [braceAnimation, setBraceAnimation] = useState(1);
  const [animationStatus, setAnimationStatus] = useState([
    false,
    false,
    false,
    false
  ]);

  useEffect(() => {
    moveTitle(
      elmTitle,
      totalSliders,
      currentSlide,
      prevSlide,
      isLastSlideIndex(currentSlide, totalSliders),
      1.5
    );
  }, [currentSlide, prevSlide]);

  let slider = null;
  let elmTitle;
  const totalSliders = data.length - 1;

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
    speed: 2000,
    easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => <CustomDots>{dots}</CustomDots>,
    customPaging: i => <Paging>{data[i].anchor}</Paging>,
    beforeChange: (oldIndex, newIndex) => {
      setPrevSlide(oldIndex);
      setCurrentSlide(newIndex);

      switch (newIndex) {
        case 0:
          setBraceAnimation(1);
          break;
        case 1:
          setBraceAnimation(2);
          break;

        default:
          setBraceAnimation(null);
          break;
      }
    },
    afterChange: newIndex => {
      setAnimationStatus(
        animationStatus.map((el, index) =>
          index === newIndex - 1 ? true : false
        )
      );
    }
  };

  const isLastSlideIndex = (current, total) => {
    // const row = 3;
    return total === current;
  };

  const handleScroll = e => {
    if (e.deltaY > 0) {
      slider.slickNext();

      // Активируем прокрутку fullpage
      console.log(
        `prev: ${prevSlide},curr: ${currentSlide}, total: ${totalSliders}`
      );
      if (isLastSlideIndex(currentSlide, totalSliders)) {
        setAllowScrolling(true);
      }
    } else {
      slider.slickPrev();

      // Активируем прокрутку fullpage
      if (currentSlide === 0) {
        setAllowScrolling(true);
      }
    }
  };

  return (
    <Wrapper className="section" onWheel={e => handleScroll(e)}>
      <SliderTitle ref={ref => (elmTitle = ref)}>
        Индивидуально для вас
      </SliderTitle>

      <div className="braceContainer">
        <ImageBraceAnimation
          pose={
            braceAnimation === 1
              ? "visible"
              : braceAnimation === 2
              ? "resize"
              : "hidden"
          }
          className="imgSlide1"
          src={SliderImages[0].img}
          alt=""
        />
      </div>

      <Slider ref={ref => (slider = ref)} {...settings}>
        {data.map((elm, index) => {
          switch (index) {
            case 0:
              return (
                <SliderItem
                  key={elm.id}
                  isPlay={
                    index === 0 ? props.isCurrent : animationStatus[index - 1]
                  }
                  {...elm}
                >
                  <ImageBgAnimation
                    pose={
                      index === 0 && props.isCurrent
                        ? "visible"
                        : animationStatus[index - 1]
                        ? "visible"
                        : "hidden"
                    }
                    className="bgImg"
                    src={SliderImages[index].bg}
                    alt=""
                  />
                  {/* <ImageFrontAnimation
                    pose={
                      index === 0 && props.isCurrent
                        ? "visible"
                        : animationStatus[index - 1]
                        ? "visible"
                        : "hidden"
                    }
                    className="imgSlide1"
                    src={SliderImages[index].img}
                    alt=""
                  /> */}
                </SliderItem>
              );

            case 1:
              return (
                <SliderItem
                  isPlay={animationStatus[index - 1]}
                  key={elm.id}
                  {...elm}
                >
                  {/* <ImageBgAnimation
                    pose={animationStatus[index - 1] ? "visible" : "hidden"}
                    className="imgSlide2-1"
                    src={SliderImages[index].img1}
                    alt=""
                  /> */}
                  <div className="imgSlide2-2">
                    <ImageFrontAnimationWiFiLg
                      pose={animationStatus[index - 1] ? "visible" : "hidden"}
                      bgImg={SliderImages[index].img2}
                    />
                    <ImageFrontAnimationWiFiMd
                      pose={animationStatus[index - 1] ? "visible" : "hidden"}
                      bgImg={SliderImages[index].img2}
                    />
                    <ImageFrontAnimationWiFiSm
                      pose={animationStatus[index - 1] ? "visible" : "hidden"}
                      bgImg={SliderImages[index].img2}
                    />
                  </div>
                  <ImageBgAnimation
                    pose={animationStatus[index - 1] ? "visible" : "hidden"}
                    className="imgSlide2-3"
                    src={SliderImages[index].img3}
                    alt=""
                  />
                </SliderItem>
              );

            case 2:
              return (
                <SliderItem
                  key={elm.id}
                  isPlay={
                    index === 0 ? props.isCurrent : animationStatus[index - 1]
                  }
                  {...elm}
                >
                  <ImageBgAnimation
                    pose={
                      index === 0 && props.isCurrent
                        ? "visible"
                        : animationStatus[index - 1]
                        ? "visible"
                        : "hidden"
                    }
                    className="bgImg"
                    src={SliderImages[index].bg}
                    alt=""
                  />
                  <ImageFrontAnimation
                    pose={
                      index === 0 && props.isCurrent
                        ? "visible"
                        : animationStatus[index - 1]
                        ? "visible"
                        : "hidden"
                    }
                    className="imgSlide3"
                    src={SliderImages[index].img}
                    alt=""
                  />
                  <IconAnimation
                    pose={
                      index === 0 && props.isCurrent
                        ? "visible"
                        : animationStatus[index - 1]
                        ? "visible"
                        : "hidden"
                    }
                    bgImg={SliderImages[index].icon[0]}
                    top="22.5%"
                    left="15%"
                  />
                  <IconAnimation
                    pose={
                      index === 0 && props.isCurrent
                        ? "visible"
                        : animationStatus[index - 1]
                        ? "visible"
                        : "hidden"
                    }
                    bgImg={SliderImages[index].icon[1]}
                    top="51.5%"
                    left="40.5%"
                  />
                  <IconAnimation
                    pose={
                      index === 0 && props.isCurrent
                        ? "visible"
                        : animationStatus[index - 1]
                        ? "visible"
                        : "hidden"
                    }
                    bgImg={SliderImages[index].icon[2]}
                    top="3.5%"
                    left="69%"
                  />
                </SliderItem>
              );
            case 3:
            case 4:
              return (
                <SliderItem
                  isPlay={animationStatus[index - 1]}
                  key={elm.id}
                  {...elm}
                >
                  <ImageBgAnimation
                    pose={animationStatus[index - 1] ? "visible" : "hidden"}
                    className="bgImg"
                    src={SliderImages[index].bg}
                    alt=""
                  />
                </SliderItem>
              );

            default:
              return -1;
          }
        })}
      </Slider>
      <BtnNext name={props.nextBlockName} toDown={moveSectionDown} />
      <BtnPrev toUp={moveSectionUp} />
    </Wrapper>
  );
};

export default Service;
