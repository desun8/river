import styled from "styled-components";

import { WrapperWave } from "../../styled/defaultArticleBg";
import SliderTitle from "../../styled/articleTitle.js";

export const Wrapper = styled(WrapperWave)`
  color: #000;
`;

export const MainTitle = styled(SliderTitle)`
  right: 30px;
  transform: none;
`;

export const CenterBlock = styled.div`
  display: flex;
  justify-content: center;
`;

export const InnerWrapper = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 880px;
  width: 100%;
  color: #000;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;

  .img {
    position: relative;
    width: 420px;

    #canvasPixi {
      position: absolute;
      right: 0;
      bottom: 30px;
      width: 388px;
      height: 540px;
    }

    .border {
      width: 374px;
      height: 481px;
      border: 3px solid #3b3d43;
      border-radius: 2px;
    }
  }

  .content {
    flex-grow: 1;
    display: flex;
    justify-content: center;
  }

  li {
    margin-bottom: 20px;
  }

  .mb30 {
    margin-bottom: 30px;
  }
`;
