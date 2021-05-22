import React, { useState } from 'react';
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

const clients = [
  {
    value: 'João',
    label: 'João'
  },
  {
    value: 'José',
    label: 'José'
  },
  {
    value: 'Ricardo',
    label: 'Ricardo'
  }
];

const OrderProfile = (props) => {
  const [values, setValues] = useState({
    createdAt: 1555016400000,
    clientName: 'João',
    products: [
      {
        name: "produto 1",
        quantity: "10"
      },
      {
        name: "produto 2",
        quantity: "20"
      }
    ],
    value: '10',
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
          title="Fazer Pedido"
        />
        <Divider />
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
                label="Selecione o cliente"
                name="state"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.state}
                variant="outlined"
              >
                {clients.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            component={Link}
            to="/app/orders"
            color="primary"
            variant="contained"
          >
            Fazer Pedido
          </Button>
        </Box>
      </Card>
    </form>
  );
};

export default OrderProfile;
