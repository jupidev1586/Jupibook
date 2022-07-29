import { useState, useEffect } from 'react'; 
import { Drawer, ButtonToolbar, IconButton } from 'rsuite';
import AngleRightIcon from '@rsuite/icons/legacy/AngleRight';
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
  }, [friendList, isRenderedList]);


  const [size, setSize] = useState('xs');
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState();

  const handleOpen = key => {
    setOpen(true);
    setPlacement(key);
  };

  return (
    <div className="FriendCardList">
      <ButtonToolbar>
        <IconButton icon={<AngleRightIcon />} onClick={() => handleOpen('left')}>
          My friends
        </IconButton>
      </ButtonToolbar>
      <Drawer size={size} placement={placement} open={open} onClose={() => setOpen(false)}>
        <Drawer.Header>
          <Drawer.Title>My friends</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body>
          {
            filterBtnVisible 
            && <Button color='#333' fontSize='12px' width="100%" onHandleClick={ 
              () => {
                filterMsgFriends('')
                setFilterBtnVisible(false);
              }
            } btnTextContent='CLEAR FILTER' bgColor='ghostwhite'/>
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
        </Drawer.Body>
      </Drawer>
      
    </div>
  )
}

export default FriendCardList;