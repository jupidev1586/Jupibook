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
      <h5>{ modalTextContent }</h5>
      <div className="Modal__btns mt-2">
        <Button onHandleClick={onCancelBtn} btnTextContent="Annulla" bgColor="lightcoral" type="button" />
        <Button onHandleClick={onConfirmBtn} btnTextContent="Conferma" bgColor="lightseagreen" type="button" />
      </div>
    </div>
  )
}

export default Modal;