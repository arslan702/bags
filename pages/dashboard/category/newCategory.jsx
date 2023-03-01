import { Box, Button, ButtonGroup, Container, Stack, TextField, Typography } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import styles from './category.module.css';
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { LoadingButton } from '@mui/lab';

function NewCategory() {
  const classes = useStyles();

  const [category, setCategory] = useState('');
  const [img, setImg] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);
  const [load, setLoad] = useState(false);

  const router = useRouter();

  const createCategory = ({ category, img }) => {
    setLoad(true)
    axios
      .post(`/api/category/create`, { category, img })
      .then((res) => {
        router.push('/dashboard/category');
        setLoad(false)
      })
      .catch((err) => {
        console.log(err)
        setLoad(false);
      });
  };

  const createProductImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImg([]);
    setImagesPreview([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
          setImg((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createCategory({ category, img });
  };

  const back = (e) => {
    e.preventDefault();
      router.push('/dashboard/category')
  };

  // const handleaddCategory = () => {
  //   setSubCategory([...subCategory, values])
  //   setValues('');
  // }
  // console.log(values)
  // console.log(subCategory)
  
  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4" gutterBottom font sx={{ fontFamily:'Open Sans', fontWeight:'600'}}> 
          New Category
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
          onChange={(e) => setCategory(e.target.value)}
          value={category}
          label="Category Name"
          type="text"
          margin="normal"
        />
          {/* {subCategory?.map((sub, index) => (
            <>
            <TextField
              value={sub}
              margin="normal"
              style = {{width: "40%"}}
            />
            <Button variant="outlined" color="error" onClick={() => removesubCategoryFields(index)}>
              <RemoveRoundedIcon/>
            </Button>
            </>
          ))} */}
            {/* <>
              <TextField
                onChange={(e) => setValues(e.target.value)}
                value={values}
                label="Categories"
                type="text"
                margin="normal"
                style = {{width: "40%"}}
              />
              <Button variant='contained' onClick={() => handleaddCategory()}><AddRoundedIcon/></Button>
            </> */}
          <br/>
          <div className={classes.formFields}>
        <div className={styles.createProductFormFile}>
              <input
                type="file"
                name="avatar"
                accept="image/*"
                onChange={createProductImagesChange}
                multiple
              />
            </div>
            <div className={styles.createProductFormImage}>
              {imagesPreview.map((image, index) => (
                <img key={index} src={image} alt="Product Preview" />
              ))}
            </div>
        </div>
        </>

        <ButtonGroup className={classes.buttons} aria-label="outlined primary button group">
          <Button onClick={(e) => back(e)} style={{fontFamily:"Open Sans", minWidth:"90px"}}>Back</Button>
          <LoadingButton loading={load} variant="contained" type="submit" style={{fontFamily:"Open Sans", minWidth:"90px"}}>
            Create
          </LoadingButton>
        </ButtonGroup>
      </Box>
    </Container>
  );
}

export default NewCategory;

NewCategory.getLayout = function PageLayout(page) {
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
