import {
  Box,
  Button,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

const OrderListToolbar = (props) => (
  <Box {...props}>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end'
      }}
    >
      <Button
        component={Link}
        to="/app/orders/create"
        color="primary"
        variant="contained"
      >
        Fazer Pedido
      </Button>
    </Box>
  </Box>
);

export default OrderListToolbar;
