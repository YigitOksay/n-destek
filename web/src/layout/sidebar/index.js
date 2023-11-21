// MenuList.js

import React, { useState } from 'react';
import { List, ListItemButton, ListItemIcon, ListItemText, Collapse } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import * as Icons from '@mui/icons-material';
import jsonData from '../../api/sidebar.json';
import '../../styles/main.scss'

const SubMenu = ({ items, openMenus, handleToggle, parentFontSize }) => {
  return (
    <List disablePadding>
      {items.map((item) => (
        <list key={item.id}>
          <ListItemButton onClick={() => handleToggle(item.id)} sx={{ pl: 4 }}>
            <ListItemIcon>
              {Icons[item.icon] && React.createElement(Icons[item.icon])}
            </ListItemIcon>
            <ListItemText primary={item.title} sx={{ fontSize: `${parentFontSize - 2}px` }} />
            {item.children && item.children.length > 0 && (openMenus[item.id] ? <ExpandLess /> : <ExpandMore />)}
          </ListItemButton>
          {item.children && item.children.length > 0 && (
            <Collapse in={openMenus[item.id]} timeout="auto" unmountOnExit>
              <SubMenu items={item.children} openMenus={openMenus} handleToggle={handleToggle} parentFontSize={parentFontSize - 2} />
            </Collapse>
          )}
        </list>
      ))}
    </List>
  );
};

const MenuList = () => {
  const [openMenus, setOpenMenus] = useState({});

  const handleToggle = (itemId) => {
    setOpenMenus((prev) => ({ ...prev, [itemId]: !prev[itemId] }));
  };

  // Başlangıç font boyutu burada belirlenebilir
  const initialFontSize = 16;

  return <List className='sideBar'>{renderMenuItems(jsonData, initialFontSize)}</List>;

  function renderMenuItems(items, parentFontSize) {
    return items.map((item) => (
      <List key={item.id}>
        <ListItemButton onClick={() => handleToggle(item.id)}>
          <ListItemIcon>
            {Icons[item.icon] && React.createElement(Icons[item.icon])}
          </ListItemIcon>
          <ListItemText primary={item.title} sx={{ fontSize: `${parentFontSize}px` }} />
          {item.children && item.children.length > 0 && (openMenus[item.id] ? <ExpandLess /> : <ExpandMore />)}
        </ListItemButton>
        {item.children && item.children.length > 0 && (
          <Collapse in={openMenus[item.id]} timeout="auto" unmountOnExit>
            <SubMenu items={item.children} openMenus={openMenus} handleToggle={handleToggle} parentFontSize={parentFontSize} />
          </Collapse>
        )}
      </List>
    ));
  }
};

export default MenuList;
