
import { useState } from 'react'; 
import { Drawer, ButtonToolbar, IconButton } from 'rsuite';
import AngleLeftIcon from '@rsuite/icons/legacy/AngleLeft';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './index.css';

const ListItem = ({link="/", title}) => {
  return (
    <li className="ListItem">
      <a className="ListItem__link" href={ link }>{ title }</a>
    </li>
  )
}


const Navbar = () => {

  const [size, setSize] = useState('xs');
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState();

  const handleOpen = key => {
    setOpen(true);
    setPlacement(key);
  };


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
    },
    {
      id: 4,
      title: localStorage.getItem('username') || 'no-user',
      url: '#'
    },
    {
      id: 5,
      title: 'LOGOUT',
      url: localStorage.removeItem('username')
    }
  ]

    return (
    <header className="Navbar__header">
      <img src="/logo.png" alt="" className="logo" width="45" />
      <FontAwesomeIcon icon="fa-solid fa-bars"  onClick={() => handleOpen('right')} />
      <Drawer size={size} placement={placement} open={open} onClose={() => setOpen(false)}>
        <Drawer.Header>
          <Drawer.Title>MENU</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body>
        <nav className="Navbar__nav">
          
          <ul className="list-unstyled Navbar__nav__menu">
            {
              linkList.map(link => <ListItem title={link.title} link={link.url} key={link.id}/>)
            }
          </ul>
        </nav>
        </Drawer.Body>
      </Drawer>
    </header>
  )
}

export default Navbar;