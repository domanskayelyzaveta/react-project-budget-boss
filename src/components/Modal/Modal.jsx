import PropTypes from 'prop-types';
import { Childrens, Content, StyledButtonClose, Wrapper } from './Modal.styled';

const Modal = ({ children, onCloseModal }) => {
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

  return (
    <Wrapper onClick={onBackDropClick}>
      <Content>
        <StyledButtonClose onClick={onCloseModal}>Close</StyledButtonClose>
        <Childrens>{children}</Childrens>
      </Content>
    </Wrapper>
  );
};
Modal.propTypes = {
  children: PropTypes.node,
  onCloseModal: PropTypes.func,
};

export default Modal;

