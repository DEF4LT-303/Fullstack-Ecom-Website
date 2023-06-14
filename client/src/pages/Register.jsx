import { useState } from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(225, 225, 225, 0.2),
      rgba(225, 225, 225, 0.7)
    ),
    url('https://wallpaperaccess.com/full/7445.jpg');
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
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
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const ErrorMessage = styled.div`
  color: red;
  margin-bottom: 10px;
`;

function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const handleRegister = (e) => {
    e.preventDefault();

    // Validate form fields
    const validationErrors = {};
    if (firstName.trim() === '') {
      validationErrors.firstName = 'First name cannot be empty';
    }
    if (lastName.trim() === '') {
      validationErrors.lastName = 'Last name cannot be empty';
    }
    if (username.trim() === '') {
      validationErrors.username = 'Username cannot be empty';
    }
    if (email.trim() === '') {
      validationErrors.email = 'Email cannot be empty';
    }
    if (password.trim() === '') {
      validationErrors.password = 'Password cannot be empty';
    }

    if (Object.keys(validationErrors).length > 0) {
      // Set the validation errors
      setErrors(validationErrors);
      return;
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input
            placeholder='first name'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            style={errors.firstName && { border: '1px solid red' }}
          />

          <Input
            placeholder='last name'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            style={errors.lastName && { border: '1px solid red' }}
          />

          <Input
            placeholder='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={errors.username && { border: '1px solid red' }}
          />

          <Input
            placeholder='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={errors.email && { border: '1px solid red' }}
          />

          <Input
            placeholder='password'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={errors.password && { border: '1px solid red' }}
          />
          {errors && <ErrorMessage>All fields are required!</ErrorMessage>}

          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={handleRegister}>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default Register;
