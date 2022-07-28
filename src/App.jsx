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
  const [searchValue, setSearchValue] = useState();
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
        <Navbar />
          <div className="App__friends">
            <h3>My friends</h3>
            <FriendCardList isRenderedList={isRenderedList} filterMsgFriends={setSearchValue} searchValue={searchValue} />
            <h4>Add a friend</h4>
            <AddFriend isRenderedList={ isRenderedList } onAddButton={ setRenderedList } />
          </div>
          <div className="App_messages">
            <h3>Add a message</h3>
            <AddMessage isRenderedList={ isRenderedList } onAddButton={ setRenderedList }/>
            <div className="flexDiv">
              <h4>Search by friend</h4>
              <input onChange={(e) => setSearchValue(e.target.value)} type="text" className="filterSearch" placeholder="Type a friend name..."></input>
            </div>
            <MessageCardList filterValue={searchValue} isRenderedList={ isRenderedList } setRenderedList={setRenderedList}/>
          </div>
        </>
      }
    </div>
  );
}

export default App;