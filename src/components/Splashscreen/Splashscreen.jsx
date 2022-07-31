import { useState } from 'react';
import Button from '../Button';
import { POST } from '../../utils/api.js';
import './index.css';

const Splashscreen = ({onHandleClick}) => {
  const [usernameInput, setUsernameInput] = useState('');
  // Controlled component!!! - Forms e input
  // const [friendName, setFriendName] = useState('');
  const [friendPhoto, setFriendPhoto] = useState('');
  const onFormSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('username', usernameInput);
    console.log(localStorage.getItem('username'))
    onHandleClick(false);
    if (usernameInput && friendPhoto) {
      
      POST('friends', {
        name: usernameInput,
        photo: friendPhoto,
      })
      .then(() => {
        setUsernameInput('');
        setFriendPhoto('');
      })
    }
  }
  return (
    <div className="Splashscreen">
      <form className="Splashscreen__form" onSubmit={onFormSubmit}>
        <img src="/logoipsum-logo-14.svg" alt="Logo App" />
        <h2 className="Splashscreen__header">What's your name?</h2>
        <h3 className="Splashscreen__header Splashscreen__header--h3">Insert your name and a photo url</h3>
        <input
          value={usernameInput}
          onChange={(e) => setUsernameInput(e.target.value)}
          className="Splashscreen__form--input"
          type="text"
          placeholder="Type your name..."
          required
        />
        <input
        className="Splashscreen__form__photo"
          type="text"
          placeholder="Photo url..."
          value={ friendPhoto }
          onChange={(e) => setFriendPhoto(e.target.value)}
          required
        />
        <Button type="submit" bgColor='#6a3c34' color="white" btnTextContent="Login"/>
      </form>
    </div>
  )
}

export default Splashscreen;