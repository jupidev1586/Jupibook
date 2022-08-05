import { useState } from 'react';
import { POST } from '../../utils/api.js';
import Button from '../Button';
import './index.css';

const AddMessage = ({ isRenderedList, onAddButton }) => {
  // Controlled component!!! - Forms e input
  const [messageText, setMessageText] = useState('');


  const dateTime = `${new Date().getDay().toString().padStart(2, '0')}.${new Date().getMonth().toString().padStart(2, '0')}.${new Date().getFullYear()} - ${new Date().getHours()}:${new Date().getMinutes().toString().padStart(2, '0')}`;
  
  const onFormSubmit = (e) => {
    e.preventDefault();

    if (messageText) {
      POST('messages', {
        text: messageText,
        sender: localStorage.getItem('username') || 'Generic',
        date: dateTime
      })
      .then(() => {
        setMessageText('');
        // setSender('');
        onAddButton(!isRenderedList);
      })
    }
  }

  return (
    <form className="AddMessage" onSubmit={onFormSubmit}>
      <input
        className="AddMessage__text"
        type="text"
        placeholder="Write a message..."
        value={ messageText }
        onChange={(e) => setMessageText(e.target.value)}
        required
      />
      {/* <input
        className="AddMessage__sender"
        type="text"
        placeholder="Author..."
        value={ sender }
        onChange={(e) => setSender(e.target.value)}
        required
      /> */}
      <div className="AddMessage__flexDiv">
      <Button type="submit" btnTextContent='POST' bgColor='tomato' color='white' width='100%'/>
      </div>
      
    </form>
  )
}

export default AddMessage;