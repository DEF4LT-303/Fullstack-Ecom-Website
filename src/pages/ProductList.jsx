import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Products from '../components/Products';

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

const Select = styled.select``;

function ProductList() {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>Games</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Content:</FilterText>
          <Select>
            <option disabled selected>
              Type
            </option>
            <option>Gift Cards</option>
            <option>Games</option>
            <option>Subscriptions</option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Content:</FilterText>
          <Select>
            <option disabled selected>
              Price
            </option>
            <option>High - Low</option>
            <option>Low - High</option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Footer />
    </Container>
  );
}

export default ProductList;
