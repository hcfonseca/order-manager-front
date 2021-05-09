import {useState} from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from '@material-ui/core';
import {Link} from "react-router-dom";


const ProductProfile = (props) => {
  const [values, setValues] = useState({
    name: 'jfehfkjlehfe',
    price: '40.00',
    description: 'efoiuehwlfkwerhflkwhrfgihofivdshjkjgkpwfrhgboifhgbpwvw',
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form
      autoComplete="off"
      noValidate
      {...props}
    >
      <Card>
        <CardHeader
          subheader="Essas informações podem ser editadas"
          title="Cadastrar Produto"
        />
        <Divider/>
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Nome"
                name="name"
                onChange={handleChange}
                required
                value={values.name}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Preço"
                name="price"
                onChange={handleChange}
                required
                value={values.price}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                label="Descrição"
                name="description"
                onChange={handleChange}
                required
                value={values.description}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider/>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            component={Link}
            to="/app/products"
            color="primary"
            variant="contained"
          >
            Cadastrar
          </Button>
        </Box>
      </Card>
    </form>
  );
};

export default ProductProfile;
