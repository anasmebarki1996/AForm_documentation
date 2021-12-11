import React from 'react';
import MenuItem from './MenuItem';
import './style.css';
const Sidebar = ({ showMenu }) => {
  const menu = [
    { title: 'Dashboard', icon: 'home.png', link: '/', subMenu: [] },
    {
      title: 'bootstrap',
      icon: 'bootstrap.svg',
      link: '/bootstrap-form',
      subMenu: [],
    },
    {
      title: 'Material UI',
      icon: 'material-ui.svg',
      link: '/material-ui-form',
      subMenu: [],
    },
  ];
  return (
    <div className={showMenu ? 'sidebar' : 'sidebar close'}>
      <div className="logo-details">
        <span className="logo_name">AForm</span>
      </div>
      <ul className="nav-links">
        {menu.map((item, i) => (
          <MenuItem item={item} key={i} />
        ))}
        <li>
          <div className="profile-details">
            <div className="profile-content"></div>
            <div className="name-job">
              <div className="profile_name">Anas Mebarki</div>
              <div className="job">Web Developer</div>
            </div>
            <i className="bx bx-log-out"></i>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
