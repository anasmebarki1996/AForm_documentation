import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MenuItem = ({ item }) => {
  const [open, setOpen] = useState(false);
  return (
    <li className={open ? 'showMenu' : ''}>
      {!item.subMenu || item.subMenu.length === 0 ? (
        <Link to={item.link}>
          <img className="subMenu-icon" src={'/assets/images/sidebar/' + item.icon} alt={item.icon}></img>
          <span className="link_name">{item.title}</span>
        </Link>
      ) : (
        <>
          <div className="icon-link">
            <div>
              <img className="subMenu-icon" src={'/assets/images/sidebar/' + item.icon} alt={item.icon}></img>
              <span className="link_name">{item.title}</span>
            </div>
            <i
              className="bx bxs-chevron-down arrow"
              onClick={() => {
                setOpen(!open);
              }}
            ></i>
          </div>
          <ul className="sub-menu">
            {item.subMenu.map((subMenuItem, index) => (
              <li key={index}>
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
