import styled from "styled-components";
import MyContainer from "../../ui/myContainer/MyContainer";

// الحاوية الرئيسية: أفقي على الديسكتوب، عمودي على الموبايل
export const TimelineContainer = styled.div`
  display: flex !important;
  flex-direction: column;
  --width-stage: 300px;
  --gap: 30px;
  gap: var(--gap);
  @media (max-width: 992px) {
    --width-stage: 200px;
  }
  @media (max-width: 768px) {
    flex-direction: row-reverse;
    column-gap: var(--gap);
    justify-content: center;
  }
`;

// تغليف كل مرحلة (LargeCircle فوق و Circle الرقم تحت)
export const Stage = styled.div`
  width: var(--width-stage);
  height: var(--width-stage);

  border-radius: 50%;
  background-color: #efefef;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    max-width: 80%;
  }
  .handPhone {
    margin-top: 50px;
  }
`;

// الدائرة الصغيرة للرقم (كما قبل)
export const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  font-size: var(--min-text);
  color: white;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  position: relative;
  h2 {
    position: absolute;
    width: 300px;
    text-align: center;
    bottom: -50px;
    color: ${({ theme }) => theme.colors.primary};
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

// الخط الواصل بين المراحل
export const Connector = styled.div`
  flex: 1;
  height: 4px;
  background-color: ${({ theme }) => theme.colors.primary};
  margin: 0 2px;

  @media (max-width: 768px) {
    width: 4px;
    margin: 2px 0;
  }
`;
export const StageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  &.tl {
    padding: 0 calc(calc(var(--width-stage) / 2) - calc(var(--gap) / 2));
  }
  &.txt {
    /* padding: 0 calc(calc(var(--width-stage) / 4) + calc(var(--gap) / 2)); */
    h2 {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    &.tl {
      padding: calc(calc(var(--width-stage) / 2) - calc(var(--gap) / 2)) 0;
    }
    &.stages {
      row-gap: var(--gap);
    }
  }
`;
export const Title = styled.h2`
  text-align: center;
  font-size: var(--normal-text);
  font-weight: bold;
  margin-bottom: 30px;
`;
