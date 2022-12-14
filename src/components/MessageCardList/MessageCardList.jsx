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
        setMessageList(data.sort((a, b) => dateSort(b,a)))
      }
    })
  }, [isRenderedList, filterValue]);

 

  return (
    <div className="MessageCardList">
      <Button btnTextContent="UPDATE FEED" width='100%' fontSize='16x' bgColor='#5e5c59' display='flex' color={'tomato'} onHandleClick={() => setRenderedList(!isRenderedList)}/>
      {
        messageList.length
        ? messageList.map(message => <MessageCard isRenderedList={isRenderedList} onDeleteBtn={setRenderedList} textContent={ message } key={ message.id }/>)
        : <p>Loading...</p>
      }
    </div>
  )
}

export default MessageCardList;