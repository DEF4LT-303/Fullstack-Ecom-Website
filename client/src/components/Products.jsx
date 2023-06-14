import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { publicRequest } from '../requestMethod';
import Product from './Product';

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await publicRequest.get(
          cat
            ? `/products?category=${cat}` // if cat is not null, then fetch products with category
            : '/products'
        );
        setProducts(res.data); // set products to the response data after filtering
      } catch (err) {}
    };
    fetchProducts();
  }, [cat]);

  useEffect(() => {
    // state for filters
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [cat, filters, products]);

  return (
    <Container>
      {cat
        ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
        : products
            .slice(0, 8)
            .map((item) => <Product item={item} key={item.id} />)}
    </Container>
  );
};

export default Products;
