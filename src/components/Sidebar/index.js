import React from "react";
import {
  SidebarContainer,
  CloseIcon,
  Icon,
  SidebarWrapper,
  SidebarLink,
  SidebarMenu
} from "./SidebarElements";

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu >
          <SidebarLink to="home" onClick={toggle}>Home</SidebarLink>
          <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
          <SidebarLink to="work" onClick={toggle}>Work</SidebarLink>
          <SidebarLink to="resume" onClick={toggle}>Resume</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
