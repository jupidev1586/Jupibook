
import { useState } from 'react'; 
import { Drawer } from 'rsuite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './index.css';

const ListItem = ({link="/", title}) => {
  return (
    <li className="ListItem">
      <a className="ListItem__link" href={ link }>{ title }</a>
    </li>
  )
}
const UserItem = () => {
  return (
    <span className="ListItem__link tc-bold">{localStorage.getItem('username') || 'no-user'}</span>
  )
}


const Navbar = ({ onLogoutClick }) => {

  const [size, setSize] = useState('xs');
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState();

  const handleOpen = key => {
    setOpen(true);
    setPlacement(key);
  };

  const onLogout = () => {
    const logout = localStorage.removeItem('username');
    onLogoutClick(true);
    return logout
  }
  
  const BtnItem = () => {
    return (
      <li className="ListItem">
        <button className="ListItem__link" onClick={ onLogout }>LOGOUT</button>
      </li>
    )
  }

  const linkList = [
    {
      id: 1,
      title: 'Home',
      url: '#'
    },
    {
      id: 2,
      title: 'About',
      url: '#'
    },
    {
      id: 3,
      title: 'Contacts',
      url: '#'
    }
  ]

  

  return (
    <header className="Navbar__header">
      <img src="/logo.png" alt="" className="logo" width="45" />
      <div className="d-flex">
        <UserItem />
        <FontAwesomeIcon icon="fa-solid fa-bars"  onClick={ () => handleOpen('right') } />
      </div>
      
      <Drawer size={size} placement={placement} open={open} onClose={() => setOpen(false)}>
        <Drawer.Header>
          <Drawer.Title>MENU</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body>
        <nav className="Navbar__nav">
          
          <ul className="list-unstyled Navbar__nav__menu">
            {
              linkList.map(link => <ListItem 
                title={link.title} 
                link={link.url} 
                key={link.id}
              />)
            }
            <BtnItem />
          </ul>
        </nav>
        </Drawer.Body>
      </Drawer>
    </header>
  )



}

export default Navbar;