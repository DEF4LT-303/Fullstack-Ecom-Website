import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
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
        // console.log(cat);
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/products?category=${cat}` // if cat is not null, then fetch products with category
            : 'http://localhost:5000/api/products'
        );
        setProducts(res.data); // set products to the response data after filtering
        // console.log(res);
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
      {filteredProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
