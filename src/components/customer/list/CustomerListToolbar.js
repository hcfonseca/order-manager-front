import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Search as SearchIcon } from 'react-feather';

const CustomerListToolbar = (props) => (
  <Box {...props}>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end'
      }}
    >
      <Button
        component={Link}
        to="/app/customers/create"
        color="primary"
        variant="contained"
      >
        Novo Cliente
      </Button>
    </Box>
  </Box>
);

export default CustomerListToolbar;
