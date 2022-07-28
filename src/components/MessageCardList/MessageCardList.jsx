import { useState, useEffect } from 'react';
import MessageCard from '../MessageCard';
import { GET } from '../../utils/api';
import Button from '../Button/Button';
import './index.css';

const MessageCardList = ({ isRenderedList, setRenderedList, filterValue }) => {
  const [messageList, setMessageList] = useState([]);

  const dateSort = (a, b) => a.date < b.date ? 1 : -1;
  
  useEffect(() => {
    GET('messages')
    .then((data) => {
      if (filterValue) {
        setMessageList(data.filter((message) => message.sender.toLowerCase().includes(filterValue.toLowerCase())).sort((a, b) => dateSort(a,b)));
      } else {
        setMessageList(data.sort((a, b) => dateSort(a,b)))
      }
    })
  }, [isRenderedList, filterValue]);

 

  return (
    <div className="MessageCardList">
      <Button btnTextContent="Update list" width='100%' bgColor='#ccc' onHandleClick={() => setRenderedList(!isRenderedList)}/>
      {
        messageList.length
        ? messageList.map(message => <MessageCard isRenderedList={isRenderedList} onDeleteBtn={setRenderedList} textContent={ message } key={ message.id }/>)
        : <p>Loading...</p>
      }
    </div>
  )
}

export default MessageCardList;