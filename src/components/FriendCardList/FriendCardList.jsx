import { useState, useEffect } from 'react'; 
import FriendCard from '../FriendCard';
import Button from '../Button';
import { GET } from '../../utils/api';
import './index.css';

const FriendCardList = ({filterMsgFriends}) => {
  const [friendList, setFriendList] = useState([]);
  const [filterBtnVisible, setFilterBtnVisible] = useState(false);
  const [isRenderedList, setRenderedList] = useState(false);

  useEffect(() => {
    GET('friends').then(data => setFriendList(data));
  }, [isRenderedList]);

  return (
    <div className="FriendCardList">
      {
        filterBtnVisible 
        && <Button color='#ccc' width="100%" onHandleClick={ 
          () => {
            filterMsgFriends('')
            setFilterBtnVisible(false)
          }
        } btnTextContent='Clear Filter' bgColor='ghostwhite'/>
      }
      {
        friendList.length
          ? friendList.map(friend => <FriendCard key={friend.id} setRenderedList={setRenderedList} friendPhoto={friend.photo}
            onHandleClick={() => {
            filterMsgFriends(friend.name)
            setFilterBtnVisible(true)
           }} friendData={friend}/>)
          : <p>Loading...</p>
      }
    </div>
  )
}

export default FriendCardList;