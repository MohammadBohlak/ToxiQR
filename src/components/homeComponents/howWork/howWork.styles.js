import styled from "styled-components";
import MyContainer from "../../ui/myContainer/MyContainer";

// الحاوية الرئيسية: أفقي على الديسكتوب، عمودي على الموبايل
export const TimelineContainer = styled.div`
  display: flex !important;
  gap: 20px;
  flex-direction: column;
  @media (max-width: 768px) {
    flex-direction: row-reverse;
    column-gap: 20px;
    justify-content: center;
  }
`;

// تغليف كل مرحلة (LargeCircle فوق و Circle الرقم تحت)
export const Stage = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #efefef;
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
  @media (max-width: 768px) {
    flex-direction: column;
    &.stages {
      row-gap: 10px;
    }
  }
`;
export const Title = styled.h2`
  text-align: center;
  font-size: var(--normal-text);
  font-weight: bold;
  margin-bottom: 30px;
`;
