import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MenuItem = ({ item }) => {
  const [open, setOpen] = useState(false);
  return (
    <li className={open ? 'showMenu' : ''}>
      {!item.subMenu || item.subMenu.length === 0 ? (
        <Link to={item.link}>
          <i class={item.icon}></i>
          <span class="link_name">{item.title}</span>
        </Link>
      ) : (
        <>
          <div class="iocn-link">
            <div>
              <img class="subMenu-icon" src={'/assets/images/sidebar/' + item.icon} alt={item.icon}></img>
              <span class="link_name">{item.title}</span>
            </div>
            <i
              class="bx bxs-chevron-down arrow"
              onClick={() => {
                setOpen(!open);
              }}
            ></i>
          </div>
          <ul class="sub-menu">
            {item.subMenu.map((subMenuItem) => (
              <li>
                <Link to={subMenuItem.link}>{subMenuItem.title}</Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </li>
  );
};

export default MenuItem;
