import Button from '../Button';

import './index.css';

const Modal = ({modalTextContent, onModalConfirm, setModalVisibility}) => {
  const onConfirmBtn = () => {
    onModalConfirm();
    setModalVisibility(false);
  }

  const onCancelBtn = () => {
    setModalVisibility(false);
  }

  return (
    <div className="Modal">
      <div className="Modal__overlay"></div>
      <div className="Modal__content">
        <div className="Modal_header">
          <h5>{ modalTextContent }</h5>
        </div>
        
        <div className="Modal__btns mt-2">
          <Button onHandleClick={onCancelBtn} btnTextContent="Annulla" bgColor="lightcoral" type="button" />
          <Button onHandleClick={onConfirmBtn} btnTextContent="Conferma" bgColor="lightseagreen" type="button" />
        </div>
      </div>
    </div>
  )
}

export default Modal;