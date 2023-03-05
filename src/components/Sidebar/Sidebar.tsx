import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import * as FaIcons from "react-icons/fa";

import { SidebarData } from "./Sidebar.data";

export default function Sidebar() {
  return (
    <>
      <SidebarMenu>
        <ProfilePic></ProfilePic>
        <Nav>
          {SidebarData.map((item, index) => {
            return (
              <MenuItems key={index}>
                <MenuItemLinks to={item.path}>
                  {item.icon}
                  <span style={{ marginLeft: "16px" }}>{item.title}</span>
                </MenuItemLinks>
              </MenuItems>
            );
          })}
        </Nav>
        <Contact>
          <ContactLinkItem href="google.com">
            <FaIcons.FaLinkedin />
          </ContactLinkItem>
          <ContactLinkItem href="https://github.com">
            <FaIcons.FaGithub />
          </ContactLinkItem>
        </Contact>
      </SidebarMenu>
    </>
  );
}

const Nav = styled.div`
  height: 60%;
  padding: 5%;
`;
const ProfilePic = styled.div`
  height: 20%;
  width: 100%;
  background-color: red;
`;
const Contact = styled.div`
  display: flex;
  flex-direction: row;
  height: 15%;
  justify-content: space-around;
`;
const SidebarMenu = styled.div`
  width: 350px;
  height: 100vh;
  background-color: #403d3d;
  top: 0;
  transition: 0.6s;
`;

const MenuItems = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  height: 10%;
  padding: 1rem 0 1.25rem;
`;

const MenuItemLinks = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0 2rem;
  font-size: 20px;
  text-decoration: none;
  width: 100%;
  height: 100%;
  color: #ffffff;
  &:hover {
    background-color: #545353;
    color: #ffffff;
  }
`;

const ContactLinkItem = styled.a`
  display: flex;
  align-items: center;
  font-size: 40px;
  text-decoration: none;
  width: 100%;
  height: 100%;
  color: #ffffff;
  justify-content: center;
  &:hover {
    background-color: #545353;
    color: #ffffff;
  }
`;
