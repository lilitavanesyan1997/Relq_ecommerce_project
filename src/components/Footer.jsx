import {
    Facebook,
    Instagram,
    Phone,
    Room,
    Twitter,MailOutline } from "@material-ui/icons";
import styled from "styled-components";
import React from 'react'
import { mobile } from "../responsive";
import { blue } from "@material-ui/core/colors";



const Container = styled.div`
display: flex;
${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
margin: 20px 0px;
`;
const SocialContainer = styled.div`
display: flex;
`;
const SocialIcone = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${(props) => props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
`;

const Center = styled.div`
flex: 1;
padding: 20px;
${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
flex: 1;
${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;


const Footer = () => {
  return (
  <Container>
     <Left>
        <Logo>LiLiT</Logo>
        <Desc>Online Shopping features are centralized in your admin,
             so you can manage localization, shipping, duties,
              and compliance from a single source.
        </Desc>
        <SocialContainer>
            <SocialIcone color="3B5999">
             <a href="https://www.facebook.com/" target="_blank"><Facebook/></a>
            </SocialIcone>
            <SocialIcone color="E4405F">
            <a href="https://www.instagram.com/" target="_blank"><Instagram /></a>
            </SocialIcone>
            <SocialIcone color="55ACEE">
            <a href="https://www.twitter.com/" target="_blank"><Twitter /></a>
            </SocialIcone>
        </SocialContainer>
     </Left>
     <Center>
     <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
     </Center>
     <Right>
     <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> Azat Ankax Arcax
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/>+374 97 00 00 00
        </ContactItem>
        <ContactItem>
        <a href="https://www.@gmail.com/" target="_blank" style={{textDecoration:"none",color:"black"}}><MailOutline style={{marginRight:"10px"}} />@gmail.com </a>
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
    </Right>
  </Container>
  );
};

export default Footer;
