import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid
} from '@material-ui/core';
import OrderProfile from '../components/order/create/OrderProfile';
import React from "react";

const OrderCreate = () => (
  <>
    <Helmet>
      <title>Fazer Pedido </title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={12}
            md={12}
            xs={12}
          >
            <OrderProfile />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default OrderCreate;
