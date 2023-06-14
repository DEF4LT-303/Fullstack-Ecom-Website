import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { login } from '../Redux/apiCalls';
import { mobile } from '../responsive';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(225, 225, 225, 0.2),
      rgba(225, 225, 225, 0.7)
    ),
    url('https://wallpapercave.com/wp/wp6225854.jpg');
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  ${mobile({ width: '75%' })};
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  &:disabled {
    background-color: #cccccc;
    color: #555555;
    cursor: not-allowed;
  }
`;

const Error = styled.span`
  color: red;
`;

const Link = styled.a`
  margin: 5px 0;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();

    login(dispatch, { username, password });
  };

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder='username'
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder='password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleClick} disabled={isFetching}>
            LOG IN
          </Button>
          {error && <Error>Something went wrong...</Error>}
          <Link>Forgot password?</Link>
          <Link>Create an account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
