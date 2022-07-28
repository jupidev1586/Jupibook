import './index.css';

const ListItem = ({link="/", title}) => {
  return (
    <li className="ListItem">
      <a className="ListItem__link" href={ link }>{ title }</a>
    </li>
  )
}


const Navbar = () => {
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
      <div className="container">
        <nav className="Navbar__nav">
          <img src="/logo.png" alt="" className="logo" width="45" />
          <ul className="list-unstyled Navbar__nav__menu">
            {
              linkList.map(link => <ListItem title={link.title} link={link.url} key={link.id}/>)
            }
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar;