import React from 'react';
import MenuItem from './MenuItem';
import './style.css';
const Sidebar = ({ showMenu }) => {
  const menu = [
    { title: 'Dashboard', icon: 'bx bx-grid-alt', link: '/', subMenu: [] },
    {
      title: 'bootstrap',
      icon: 'bootstrap.svg',
      link: '',
      subMenu: [
        { title: 'Inputs', icon: 'bx bx-grid-alt', link: '/bootstrap-inputs' },
        { title: 'Register Form', icon: 'bx bx-grid-alt', link: '' },
        { title: 'Login Form', icon: 'bx bx-grid-alt', link: '' },
      ],
    },
    {
      title: 'Material UI',
      icon: 'material-ui.svg',
      link: '',
      subMenu: [
        { title: 'Inputs', link: '/bootstrap-inputs' },
        { title: 'Register Form', link: '' },
        { title: 'Login Form', link: '' },
      ],
    },
  ];
  return (
    <div class={showMenu ? 'sidebar' : 'sidebar close'}>
      <div class="logo-details">
        <span class="logo_name">AForm</span>
      </div>
      <ul class="nav-links">
        {menu.map((item, i) => (
          <MenuItem item={item} />
        ))}
        <li>
          <div class="profile-details">
            <div class="profile-content"></div>
            <div class="name-job">
              <div class="profile_name">Anas Mebarki</div>
              <div class="job">Web Developer</div>
            </div>
            <i class="bx bx-log-out"></i>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
