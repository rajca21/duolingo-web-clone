import { Link } from 'react-router-dom';

import logo from '../assets/logo.png';
import '../styles/Sidebar.css';
import { useSidebar } from '../hooks/useSidebar.hook';

const Sidebar = () => {
  const { sidebarActive, setSidebarActive } = useSidebar();

  return (
    <div className={`side-bar ${sidebarActive ? 'active' : ''}`}>
      <div id='close-btn' onClick={() => setSidebarActive(false)}>
        <i className='fas fa-times'></i>
      </div>

      <div className='profile'>
        <img src={logo} className='image' alt='user' />
      </div>

      <nav className='navbar'>
        <Link to={'/'}>
          <i className='fas fa-home'></i>
          <span className='capitalize'>home</span>
        </Link>
        <Link to={'/courses'}>
          <i className='fas fa-graduation-cap'></i>
          <span className='capitalize'>courses</span>
        </Link>
        <Link to={'/upcoming'}>
          <i className='fas fa-language'></i>
          <span className='capitalize'>upcoming</span>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
