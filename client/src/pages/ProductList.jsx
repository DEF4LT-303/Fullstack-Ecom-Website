import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import { mobile } from '../responsive';

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
  ${mobile({ margin: '0px 20px', display: 'flex', flexDirection: 'column' })};
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: '0px' })};
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: '10px 0px' })};
`;

const Option = styled.option`
  padding: 20px;
`;

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
            <Option disabled selected>
              Type
            </Option>
            <Option>Gift Cards</Option>
            <Option>Games</Option>
            <Option>Subscriptions</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Content:</FilterText>
          <Select>
            <Option disabled selected>
              Price
            </Option>
            <Option>High - Low</Option>
            <Option>Low - High</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Footer />
    </Container>
  );
}

export default ProductList;
