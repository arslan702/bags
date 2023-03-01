import { Box, Button, ButtonGroup, Container, Stack, TextField, Typography } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { LoadingButton } from '@mui/lab';

function NewBrand() {
  const classes = useStyles();

  const [title, setTitle] = useState('');
  const [load, setLoad] = useState(false);

  const router = useRouter();

  const createBrand = (title) => {
    axios
      .post(`/api/brand/create`, { title })
      .then((res) => {
        router.push('/dashboard/brands');
        setLoad(false);
      })
      .catch((err) => {
        console.log(err)
        setLoad(false);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoad(true);
    createBrand(title);
  };

  const back = (e) => {
    e.preventDefault();
      router.push('/dashboard/brands')
  };
  
  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4" gutterBottom font sx={{ fontFamily:'Open Sans', fontWeight:'600'}}> 
          Add Brand
        </Typography>
      </Stack>
      <Box
        component="form"
        onSubmit={handleSubmit}
        className={classes.form}
        sx={{
          '& > :not(style)': { m: 1, width: '' },
        }}
      >
        <>
        <TextField
          className={classes.formFields}
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          label="Brand Name"
          type="text"
          margin="normal"
        />
        </>

        <ButtonGroup className={classes.buttons} aria-label="outlined primary button group">
          <Button onClick={(e) => back(e)} style={{fontFamily:"Open Sans", minWidth:"90px"}}>Back</Button>
          <LoadingButton loading variant="contained" type="submit" style={{fontFamily:"Open Sans", minWidth:"90px"}}>
            <span>Add New</span>
          </LoadingButton>
        </ButtonGroup>
      </Box>
    </Container>
  );
}

export default NewBrand;

NewBrand.getLayout = function PageLayout(page) {
  return (
    <>{page}</>
  )
}

const useStyles = makeStyles((theme) =>
  createStyles({
    form: {
      display: 'flex',
      flexWrap: 'wrap',
 
    },
    formFields: {
      flexBasis: '45%',
      margin: '10px',
      
      [theme?.breakpoints?.down('sm')]: {
        flexBasis: '90%',
      },
    },
    nestedField: {
      flexBasis: '',
    },
    buttons: {
      flexBasis: '91.5%',
      justifyContent: 'flex-end',
    },
  })
);
