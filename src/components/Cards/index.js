import React from "react";

import { Wrapper, MainTitle, CardsGrid, InnerWrapper } from "./styled";

import { BtnNext, BtnPrev } from "../Home/NavBtnFullpage";
import Card from "./Card";

import vipBg from "../../img/card-vip-bg.png";
import vipImg from "../../img/card-vip-img.png";

import standartImg from "../../img/card-standart.png";
import juniorImg from "../../img/card-junior.png";
import childrenImg from "../../img/card-children.png";

const data = [
  {
    id: "1",
    price: "220",
    title: "VIP - Индивидуальный",
    age: "18",
    freeze: "30",
    period: "1",
    list: [
      { id: "1", name: "Персональный браслет" },
      { id: "2", name: "Сейфовые ячейки" },
      { id: "3", name: "Набор полотенец" },
      { id: "4", name: "Безлимитное посещение" },
      { id: "5", name: "Персональный Тренер" }
    ],
    describe:
      "При покупке абонемента клиент может пройти фитнес-тестирование (биоэлектрический анализ тела). По результатам обследования он  узнает, каким должен быть идеальный вес, получит информацию о состоянии мышечной массы и уровне содержания жира в организме. Это отправная точка, с которой начинается изменение своего тела.",
    imageBg: vipBg,
    imageContent: vipImg,
    innerImage: "",
    html: ""
  },
  {
    id: "2",
    price: "160",
    title: "Индивидуальный",
    age: "18",
    freeze: "30",
    period: "1",
    list: [
      { id: "1", name: "Персональный браслет" },
      { id: "2", name: "Сейфовые ячейки" },
      { id: "3", name: "Набор полотенец" },
      { id: "4", name: "Безлимитное посещение" },
      { id: "5", name: "Персональный Тренер" }
    ],
    describe:
      "При покупке абонемента клиент может пройти фитнес-тестирование (биоэлектрический анализ тела). По результатам обследования он  узнает, каким должен быть идеальный вес, получит информацию о состоянии мышечной массы и уровне содержания жира в организме. Это отправная точка, с которой начинается изменение своего тела.",
    imageContent: standartImg,
    image: "",
    innerImage: "",
    html: ""
  },
  {
    id: "3",
    price: "120",
    title: "Юниор",
    age: ["16", "20"],
    freeze: "30",
    period: "1",
    list: [
      { id: "1", name: "Персональный браслет" },
      { id: "2", name: "Сейфовые ячейки" },
      { id: "3", name: "Набор полотенец" },
      { id: "4", name: "Безлимитное посещение" },
      { id: "5", name: "Персональный Тренер" }
    ],
    describe:
      "При покупке абонемента клиент может пройти фитнес-тестирование (биоэлектрический анализ тела). По результатам обследования он  узнает, каким должен быть идеальный вес, получит информацию о состоянии мышечной массы и уровне содержания жира в организме. Это отправная точка, с которой начинается изменение своего тела.",
    imageContent: juniorImg,
    image: "",
    innerImage: "",
    html: ""
  },
  {
    id: "4",
    price: "80",
    title: "Детский",
    age: ["6", "15"],
    freeze: "30",
    period: "1",
    list: [
      { id: "1", name: "Персональный браслет" },
      { id: "2", name: "Сейфовые ячейки" },
      { id: "3", name: "Набор полотенец" },
      { id: "4", name: "Безлимитное посещение" },
      { id: "5", name: "Персональный Тренер" }
    ],
    describe:
      "При покупке абонемента клиент может пройти фитнес-тестирование (биоэлектрический анализ тела). По результатам обследования он  узнает, каким должен быть идеальный вес, получит информацию о состоянии мышечной массы и уровне содержания жира в организме. Это отправная точка, с которой начинается изменение своего тела.",
    imageContent: childrenImg,
    image: "",
    innerImage: "",
    html: ""
  }
];

const Cards = props => {
  const moveSectionDown = props.fullpage
    ? props.fullpage.moveSectionDown
    : null;
  const moveSectionUp = props.fullpage ? props.fullpage.moveSectionUp : null;

  return (
    <Wrapper className={props.isHome ? "section" : ""}>
      <MainTitle>Карты</MainTitle>

      <InnerWrapper>
        <CardsGrid>
          {data.map(elm => {
            if (elm.id === "1") {
              return (
                <Card
                  class="card-vip"
                  key={elm.id}
                  vip={true}
                  imgBg={elm.imageBg}
                  imgCnt={elm.imageContent}
                  {...elm}
                />
              );
            }

            return (
              <Card
                class={elm.id == 2 ? "card-standart" : elm.id == 3 ? "card-junior" : "card-children"}
                key={elm.id}
                colorBg={
                  elm.id == 2 ? "pink" : elm.id == 3 ? "green" : "yellow"
                }
                imgCnt={elm.imageContent}
                imgBg={elm.imageContent}
                {...elm}
              />
            );
          })}
        </CardsGrid>
      </InnerWrapper>

      <BtnNext name={props.nextBlockName} toDown={moveSectionDown} />
      <BtnPrev toUp={moveSectionUp} />
    </Wrapper>
  );
};

export default Cards;
