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
