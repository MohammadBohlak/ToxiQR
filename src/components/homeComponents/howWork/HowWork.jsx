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

export default function HowWork() {
  const { t } = useTranslation();
  return (
    <MyContainer>
      <section style={{ marginTop: "50px" }}>
        <MainTitle style={{ marginBottom: "30px" }} $align="center">
          {t("howWork")}
        </MainTitle>
        <TimelineContainer>
          <StageContainer className="stages">
            <Stage></Stage>
            <Stage></Stage>
            <Stage></Stage>
          </StageContainer>

          <StageContainer>
            <Circle>1</Circle>
            <Connector></Connector>
            <Circle>2</Circle>
            <Connector></Connector>
            <Circle>3</Circle>
          </StageContainer>
        </TimelineContainer>
      </section>
    </MyContainer>
  );
}
