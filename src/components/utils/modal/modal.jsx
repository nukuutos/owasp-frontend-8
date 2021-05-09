import useKey from '../../../hooks/use-key';
import Cross from './cross';

const Modal = ({ children, onClickClose }) => {
  useKey(onClickClose);

  return (
    <div className="modal">
      {children}
      <Cross onClick={onClickClose} className={'modal__close'} />
    </div>
  );
};

export default Modal;
