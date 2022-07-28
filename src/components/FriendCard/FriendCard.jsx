import { DELETE } from '../../utils/api';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const FriendCard = ({ friendData, onHandleClick, setRenderedList }) => {
  const { id, photo, name } = friendData;

  const onHandleDelete = (id) =>
    DELETE('friends', id)
      .then(() => setRenderedList(prev => !prev))

  return (
    <div className="FriendCard" onClick={onHandleClick}>
      <h3 className="FriendCard__name">{ name }</h3>
      <img className="FriendCard__photo" src={ photo } alt={ name } />
      <button onClick={() => onHandleDelete(id)} className="FriendCard__btn">
        <FontAwesomeIcon icon="fa-solid fa-xmark" />
      </button>
    </div>
  )
}

export default FriendCard;
