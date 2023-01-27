import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  margin: 6px;
  height: 70vh;
  position: relative;
  &:hover {
    transform: scale(0.95);
    transition: all 0.5s ease;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
  border: 1px solid black;
  opacity: 0.8;
`;
const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
  border-bottom: 3px solid black;
  text-shadow: 0 0 40px rgba(0, 0, 0, 0.5);
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
`;

function CatagoryItem({ item }) {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>BUY NOW</Button>
      </Info>
    </Container>
  );
}

export default CatagoryItem;
