import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter
} from '@material-ui/icons';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
  display: flex;
  background-color: #f5fbfd;
  ${mobile({ flexDirection: 'column' })};
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

const SocialIcon = styled.div`
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
  ${mobile({ display: 'none' })};
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
  padding: 20px;
  ${mobile({ backgroundColor: '#fff8f8' })};
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 100px;
  height: 40px;
`;

function Footer() {
  return (
    <Container>
      <Left>
        <Logo>GAME MART</Logo>
        <Desc>
          GameMart sells digital goods for gamers. Our platform is the fastest
          growing online game digital trading and services platform in
          Bangladesh. Thanks for all the support! We love you!
        </Desc>
        <SocialContainer>
          <SocialIcon color='3B5999'>
            <Facebook />
          </SocialIcon>
          <SocialIcon color='E4405F'>
            <Instagram />
          </SocialIcon>
          <SocialIcon color='E60023'>
            <Pinterest />
          </SocialIcon>
          <SocialIcon color='55ACEE'>
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Products</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <List>
          <ContactItem>
            <Room style={{ marginRight: '10px' }} /> UB4, BRACU, Mohakhali,
            Dhaka, Bangladesh
          </ContactItem>
          <ContactItem>
            <Phone style={{ marginRight: '10px' }} /> +880 013xxxxx63
          </ContactItem>
          <ContactItem>
            <MailOutline style={{ marginRight: '10px' }} /> gamemart@gmail.com
          </ContactItem>
        </List>
        <Payment src='https://logos-download.com/wp-content/uploads/2022/01/BKash_Logo-700x287.png' />
        <Payment src='https://www.logo.wine/a/logo/Nagad/Nagad-Horizontal-Logo.wine.svg' />
        <Payment src='https://assets.stickpng.com/images/58482363cef1014c0b5e49c1.png' />
      </Right>
    </Container>
  );
}

export default Footer;
