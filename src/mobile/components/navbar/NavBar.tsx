import styled from "styled-components";

import * as FaIcons from "react-icons/fa";

import profilepic from "../../../assets/imgs/profile.jpeg";

export default function NavBar() {
  return (
    <NavbarMenu>
      <NavbarTop>
        <ProfilePic src={profilepic} />
      </NavbarTop>
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
    </NavbarMenu>
  );
}

const LinkContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavbarTop = styled.div`
  height: 100%;
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfilePic = styled.img`
  border-radius: 50%;
  width: 50%;
  height: 65%;
`;
const Contact = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 35%;
  margin-left: auto;
`;
const NavbarMenu = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${({ theme }) => theme.secondary};
  top: 0;
  display: flex;
  flex-direction: row;
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
