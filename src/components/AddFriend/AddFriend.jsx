import { useState } from 'react';
import { POST } from '../../utils/api.js';
import Button from '../Button';
import './index.css';

const AddFriend = ({ isRenderedList, onAddButton }) => {
  // Controlled component!!! - Forms e input
  const [friendName, setFriendName] = useState('');
  const [friendPhoto, setFriendPhoto] = useState('');
  

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (friendName && friendPhoto) {
      
      POST('friends', {
        name: friendName,
        photo: friendPhoto,
      })
      .then(() => {
        setFriendName('');
        setFriendPhoto('');
        onAddButton(!isRenderedList);
      })
    }
  }

  return (
    <form className="AddFriend" onSubmit={onFormSubmit}>
      <input
        className="AddFriend__name"
        type="text"
        placeholder="Name..."
        value={ friendName }
        onChange={(e) => setFriendName(e.target.value)}
        required
      />
      <input
        className="AddFriend__photo"
        type="text"
        placeholder="Photo url..."
        value={ friendPhoto }
        onChange={(e) => setFriendPhoto(e.target.value)}
        required
      />
      <div className="AddFriend__flexDiv">
        <Button type="submit" btnTextContent='ADD A FRIEND' bgColor='tomato' display='flex' color='white' width='100%' />
      </div>
      
    </form>
  )
}

export default AddFriend;