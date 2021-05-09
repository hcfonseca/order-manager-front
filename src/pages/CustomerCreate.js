import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid
} from '@material-ui/core';
import CustomerProfile from '../components/customer/create/CustomerProfile';

const CustomerCreate = () => (
  <>
    <Helmet>
      <title>Criar cliente</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
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
            <CustomerProfile />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default CustomerCreate;
