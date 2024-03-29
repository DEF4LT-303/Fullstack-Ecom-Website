import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { logout } from '../Redux/userRedux';
import { mobile } from '../responsive';

const Container = styled.div`
  height: 60px;
  background-color: #ececec;
  ${mobile({ height: '50px' })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: '10px 0px' })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: 'none' })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: '50px' })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: '12px' })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: 'center' })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: '12px', marginLeft: '10px' })}
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #333; /* Custom color for the link */
  &:visited {
    color: #333; /* Custom color for visited link */
  }
  &:hover,
  &:active {
    color: #333; /* Custom color for link on hover and active state */
  }
`;

const Navbar = () => {
  const user = useSelector((state) => state.user.currentUser);
  const quantity = useSelector((state) => state.cart.quantity);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input
              placeholder='search'
              style={{ backgroundColor: 'transparent' }}
            />
            <Search style={{ color: 'gray', fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <NavLink to='/'>
            <Logo>MERN E-com site</Logo>
          </NavLink>
        </Center>
        <Right>
          {user ? (
            <>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </>
          ) : (
            <>
              <NavLink to='/register'>
                <MenuItem>Register</MenuItem>
              </NavLink>
              <NavLink to='/login'>
                <MenuItem>Log In</MenuItem>
              </NavLink>
            </>
          )}
          <NavLink to='/cart'>
            <MenuItem>
              <Badge badgeContent={quantity} color='primary'>
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </NavLink>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
