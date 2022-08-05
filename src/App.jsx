import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import AddFriend from './components/AddFriend';
import AddMessage from './components/AddMessage';
import FriendCardList from './components/FriendCardList';
import MessageCardList from './components/MessageCardList';
import Splashscreen from './components/Splashscreen';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import './App.css';


library.add(fas);

function App() {
  const [isRenderedList, setRenderedList] = useState(false);
  const [filterValue, setFilterValue] = useState();
  const [isSplashscreenVisibile, setSplashscreenVisibility] = useState(true);

  useEffect(() => {
    if(localStorage.getItem('username')) {
      setSplashscreenVisibility(false);
    }
  }, [])
  
  return (
    <div className="App">
      {
        isSplashscreenVisibile
        ? <Splashscreen onHandleClick={setSplashscreenVisibility}/>
        : <>
          <Navbar onLogoutClick={setSplashscreenVisibility} />
          <div className="App__friends">
            <h3>My friends</h3>
            <p className="mt-1">Filter by friend.</p>
            <FriendCardList isRenderedList={isRenderedList} filterMsgFriends={setFilterValue} searchValue={filterValue} />
            <h4>Add a friend</h4>
            <AddFriend isRenderedList={ isRenderedList } onAddButton={ setRenderedList } />
          </div>
          <div className="App_messages">
            <h3>Add a message</h3>
            <AddMessage isRenderedList={ isRenderedList } onAddButton={ setRenderedList }/>
            <div className="flexDiv">
              <h4>Search by friend</h4>
              <input onChange={(e) => setFilterValue(e.target.value)} type="text" className="filterSearch" placeholder="Type a friend name..."></input>
            </div>
            <MessageCardList filterValue={filterValue} isRenderedList={ isRenderedList } setRenderedList={setRenderedList}/>
          </div>
        </>
      }
    </div>
  );
}

export default App;