// Timeline.js

import { useTranslation } from "react-i18next";
import { MainTitle } from "../../common/texts";
import MyContainer from "../../ui/myContainer/MyContainer";
import {
  Circle,
  Connector,
  Stage,
  StageContainer,
  TimelineContainer,
} from "./howWork.styles";
import styled from "styled-components";
import Shared from "./Shared";
import phone from "../../../assets/images/howWork/phone.png";
import handPhone from "../../../assets/images/howWork/handPhone.png";
import msg from "../../../assets/images/howWork/msg.png";
import screen from "../../../assets/images/howWork/screen.png";

const StyledHowWork = styled.section`
  /* background-color: ${({ theme }) => theme.colors.backLight}; */
  background-color: #fff;
  padding: var(--m-top) 0;
`;
export default function HowWork() {
  const { t } = useTranslation();
  return (
    <StyledHowWork>
      <MyContainer>
        <MainTitle style={{ marginBottom: "30px" }} $align="center">
          {t("howWork")}
        </MainTitle>
        <TimelineContainer>
          <StageContainer className="stages">
            <Stage>
              <img className="phone" src={phone} />
              <img className="handPhone" src={handPhone} />
            </Stage>
            <Stage>
              <img className="screen" src={screen} />
            </Stage>
            <Stage>
              <img className="msg" src={msg} />
            </Stage>
          </StageContainer>

          <StageContainer className="tl">
            <Circle>1</Circle>
            <Connector></Connector>
            <Circle>2</Circle>
            <Connector></Connector>
            <Circle>3</Circle>
          </StageContainer>
        </TimelineContainer>
      </MyContainer>
    </StyledHowWork>
  );
}
