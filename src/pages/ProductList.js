import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import ProductListResults from '../components/product/list/ProductListResults';
import ProductListToolbar from '../components/product/list/ProductListToolbar';
import products from '../__mocks__/products';
import React from "react";

const CustomerList = () => (
  <>
    <Helmet>
      <title>Produtos</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <ProductListToolbar />
        <Box sx={{ pt: 3 }}>
          <ProductListResults products={products} />
        </Box>
      </Container>
    </Box>
  </>
);

export default CustomerList;
