import PropTypes from 'prop-types';
import {
  ButtonWrapper,
  Childrens,
  Content,
  StyledButtonAgree,
  StyledButtonClose,
  StyledButtonDisagree,
  Wrapper,
} from './Modal.styled';
import sprite from '../../images/sprite.svg';
const Modal = ({ children, onCloseModal, incomeEvent, id }) => {
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

  const handleIncomeEventAgree = (incomeEvent, id) => {
    incomeEvent(id);
    onCloseModal();
  };

  return (
    <Wrapper onClick={onBackDropClick}>
      <Content>
        <StyledButtonClose onClick={onCloseModal}>
          <svg width="12" height="12">
            <use href={`${sprite}#icon-cross-modal`} />
          </svg>
        </StyledButtonClose>
        <Childrens>{children}</Childrens>
        <ButtonWrapper>
          <StyledButtonAgree
            type="button"
            onClick={() => handleIncomeEventAgree(incomeEvent, id)}
          >
            YES
          </StyledButtonAgree>
          <StyledButtonDisagree type="button" onClick={onCloseModal}>
            NO
          </StyledButtonDisagree>
        </ButtonWrapper>
      </Content>
    </Wrapper>
  );
};
Modal.propTypes = {
  children: PropTypes.node,
  onCloseModal: PropTypes.func,
};

export default Modal;
