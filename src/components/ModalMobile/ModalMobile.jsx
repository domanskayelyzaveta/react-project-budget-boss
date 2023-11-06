import sprite from '../../images/sprite.svg';
import { Childrens, Content, StyledButtonClose } from './ModalMobile.styled';

const ModalMobile = ({ children, onCloseModal, incomeEvent }) => {
  const onCloseModalBack = incomeEvent => {
    onCloseModal(incomeEvent);
  };

  return (
    <Content>
      <StyledButtonClose onClick={() => onCloseModalBack(incomeEvent)}>
        <svg width="18" height="18">
          <use href={`${sprite}#icon-keyboard_backspace-24px`} />
        </svg>
        To transactions
      </StyledButtonClose>

      <Childrens>{children}</Childrens>
    </Content>
  );
};

export default ModalMobile;
