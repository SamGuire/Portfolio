import { Link } from "react-router-dom";
import styled from "styled-components";

import * as FaIcons from "react-icons/fa";

import { SidebarData } from "./Sidebar.data";
import profilepic from "../../../assets/imgs/profile.jpeg";

export default function Sidebar() {
  return (
    <SidebarMenu>
      <SidebarTop>
        <ProfilePic src={profilepic} />
      </SidebarTop>
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
        <LinkContainer>
          <ContactLinkItem
            href="https://www.linkedin.com/in/issam-robler-0b5a7817b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaIcons.FaLinkedin />
          </ContactLinkItem>
        </LinkContainer>
        <LinkContainer>
          <ContactLinkItem
            href="https://github.com/SamGuire"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaIcons.FaGithub />
          </ContactLinkItem>
        </LinkContainer>
      </Contact>
    </SidebarMenu>
  );
}

const LinkContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Nav = styled.div`
  height: 60%;
`;
const SidebarTop = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfilePic = styled.img`
  border-radius: 50%;
  width: 45%;
  height: 65%;
`;
const Contact = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 10%;
`;
const SidebarMenu = styled.div`
  width: 350px;
  height: 100vh;
  background-color: ${({ theme }) => theme.secondary};
  top: 0;
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
  transition: background-color 0.5s ease;
  &:hover {
    background-color: #545353;
    color: #ffffff;
  }
`;

const ContactLinkItem = styled.a`
  display: flex;
  align-items: center;
  font-size: 30px;
  text-decoration: none;
  color: #ffffff;
  justify-content: center;
  transition: background-color 0.5s ease;
  &:hover {
    background-color: #545353;
    color: #ffffff;
  }
  height: 50%;
  border-radius: 50%;
  width: 45%;
`;
