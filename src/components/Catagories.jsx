import styled from 'styled-components';
import { categories } from '../data';
import CatagoryItem from './CatagoryItem';

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

function Catagories() {
  return (
    <Container>
      {categories.map((item) => (
        <CatagoryItem item={item} />
      ))}
    </Container>
  );
}

export default Catagories;
