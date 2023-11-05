import sprite from '../../images/sprite.svg';
import { Childrens, Content, StyledButtonClose } from './ModalMobile.styled';

const ModalMobile = ({ children, onCloseModal, incomeEvent }) => {
  const onBackDropClick = e => {
    if (e.currentTarget === e.target) {
      onCloseModal();
      cleanup();
    }
  };

  const onEscKeyPress = e => {
    if (e.key === 'Escape') {
      onCloseModal();
      cleanup();
    }
  };

  document.addEventListener('keydown', onEscKeyPress);

  const cleanup = () => {
    document.removeEventListener('keydown', onEscKeyPress);
  };

  const handleIncomeEventAgree = incomeEvent => {
    incomeEvent();
    onCloseModal();
  };

  return (
    
      <Content>
        <StyledButtonClose onClick={onCloseModal}>
          <svg width="12" height="12">
            <use href={`${sprite}#icon-keyboard_backspace-24px`} />
          </svg>
          To transactions
        </StyledButtonClose>
        <Childrens>{children}</Childrens>
      </Content>
    
  );
};


export default ModalMobile;
