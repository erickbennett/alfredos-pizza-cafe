import { useRef } from 'react';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import CloseIcon from './CloseIcon';
import styled from 'styled-components';

const ModalCard = styled.div`
  height: 350px;
  width: 400px;
  display: flex;
  flex-direction: column;
  padding: 25px;
  border-radius: 30px;
  z-index: 10;
  background-image: linear-gradient(180deg, #ffffff, #f2f2f2);
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.5);

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Title = styled.div`
  border-bottom: 4px solid ${props => props.theme.red};
  height: 80px;
  font-size: 24px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Message = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 10px 0;

  font-size: 24px;
  overflow: hidden;
  overflow-wrap: break-word;
`;

const CloseRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const CloseButton = styled.button`
  height: 60px;
  width: 30%;
  border-radius: 9px;
  padding: 0;
  margin: 0;
  background-color: ${props => props.theme.red};
  font-size: 24px;
  color: #ffffff;
`;

function Modal({ title, toggle, children }) {
  const ref = useRef();
  useOnClickOutside(ref, () => toggle());

  return (
    <ModalCard ref={ref}>
      <Title onClick={toggle}>
        <span>{title}</span>
        <CloseIcon />
      </Title>

      <Message>{children}</Message>
    </ModalCard>
  );
}

export default Modal;

/* add to cart
      <CloseRow onClick={toggle}>
        <CloseButton>Close</CloseButton>
      </CloseRow>

      */
