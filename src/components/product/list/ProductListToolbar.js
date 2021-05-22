import {
  Box,
  Button,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

const ProductListToolbar = (props) => (
  <Box {...props}>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end'
      }}
    >
      <Button
        component={Link}
        to="/app/products/create"
        color="primary"
        variant="contained"
      >
        Cadastrar Produto
      </Button>
    </Box>
  </Box>
);

export default ProductListToolbar;
