import { useState } from 'react';
import { useLocation } from 'react-router-dom';
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
  const location = useLocation();
  const cat = location.pathname.split('/')[2];
  const [filters, setFilter] = useState({});
  const [sort, setSort] = useState('newest');

  const handleFilters = (e) => {
    const value = e.target.value;

    setFilter({
      ...filters, // spread operator - if there are multiple filters
      [e.target.name]: value
    });
  };

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>{cat.toLocaleUpperCase()}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Content:</FilterText>
          <Select name='type' onChange={handleFilters}>
            <Option disabled>Type</Option>
            <Option>Top Ups</Option>
            <Option>Games</Option>
            <Option>Subscriptions</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Content:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option disabled>Price</Option>
            <Option value='desc'>High - Low</Option>
            <Option value='asc'>Low - High</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <Footer />
    </Container>
  );
}

export default ProductList;
