import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import OrderListResults from '../components/order/list/OrderListResults';
import OrderListToolbar from '../components/order/list/OrderListToolbar';
import orders from '../__mocks__/orders';
import React from "react";

const OrderList = () => (
  <>
    <Helmet>
      <title>Pedidos</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <OrderListToolbar />
        <Box sx={{ pt: 3 }}>
          <OrderListResults orders={orders} />
        </Box>
      </Container>
    </Box>
  </>
);

export default OrderList;
