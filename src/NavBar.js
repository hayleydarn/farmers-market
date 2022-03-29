import styled from 'styled-components';
import React, { useState } from 'react';

const SmallMenu = styled.div`
  display: none;
  text-align: center;
  padding: 0;
  font-size: 0;
`;

const MenuBar = styled.div`
  display: block;
  text-align: center;
  font-size: 0rem;
`;

const MenuIcon = ({ onClick, icon }) => (
  <div role="button" onClick={onClick}> {icon} 
  </div> 
);


const ResponsiveMenu = (props) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  }

  return (
    <>
      <MenuBar className="large-menu-classname">{props.menu}</MenuBar>
      <SmallMenu className="small-menu-classname">
        {!showMenu ? (
        <MenuIcon 
          onClick={handleClick}
          icon= {props.menuOpenButton} /> )
        : (
          <MenuIcon onClick={handleClick} icon={props.menuCloseButton} />
        )}
        {showMenu ? <div>{props.menu}</div> : null}
      </SmallMenu>
    </>
  );
}

export default ResponsiveMenu;


