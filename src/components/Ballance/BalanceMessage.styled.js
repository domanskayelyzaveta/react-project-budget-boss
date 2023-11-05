import styled from 'styled-components';

export const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;
  padding: 24px 32px;
  width: 268px;
  height: 145px;
  border-radius: 30px;
  background: linear-gradient(118deg, #58bb67 3.05%, #368342 125.62%);
`;

export const MessageText = styled.p`
  color: #fff;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;

export const InitialBalanceWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Img = styled.img`
  position: absolute;
  z-index: 9;
  top: -11px;
`;

export const ImgWrapper = styled.div`
  position: relative;
`;
export const ParagraphNotif = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
  position: absolute;
  z-index: 9999999;
  width: 224px;
  top: 36px;
  left: 44px;
  color: var(--text-color);
`;
export const ParagraphNotific = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
  position: absolute;
  z-index: 9999999;
  width: 224px;
  top: 96px;
  left: 44px;
  color: var(--text-color);
`;
