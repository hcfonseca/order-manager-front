import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid
} from '@material-ui/core';
import LatestOrders from '../components/dashboard/LatestOrders';
import TotalOrders from '../components/dashboard/TotalOrders';
import TotalCustomers from '../components/dashboard/TotalCustomers';
import TotalRevenue from '../components/dashboard/TotalRevenue';
import React from "react";

const Dashboard = () => (
  <>
    <Helmet>
      <title>Dashboard | Material Kit</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={true}>

        <Grid container spacing={3}>
          <Grid item lg={4} sm={4} xl={4} xs={12} >
            <TotalCustomers />
          </Grid>

          <Grid item lg={4} sm={4} xl={4} xs={12}>
            <TotalOrders />
          </Grid>

          <Grid item lg={4} sm={4} xl={4} xs={12}>
            <TotalRevenue sx={{ height: '100%' }} />
          </Grid>

          <Grid item lg={12} md={12} xl={12} xs={12}>
            <LatestOrders />
          </Grid>
        </Grid>

      </Container>
    </Box>
  </>
);

export default Dashboard;
