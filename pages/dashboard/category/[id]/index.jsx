import { Box, Button, ButtonGroup, CircularProgress, Container, Stack, TextField, Typography } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react';
// import AddRoundedIcon from '@mui/icons-material/AddRounded';
// import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import axios from 'axios';
import styles from '../category.module.css';
import { useRouter } from 'next/router';


function UpdateCategory() {
  const navigate = useRouter();
  let { id } = navigate.query;
  const classes = useStyles();

  const [category, setCategory] = useState([]);
  const [img, setImg] = useState([]);
  const [oldImages, setOldImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  const [loading, setLoading] = useState(true);

  const updateCategory = ( category, img ) => {
    axios
      .patch(`/api/category/update/${id}`, { category, img })
      .then((res) => {
        navigate.push('/dashboard/category');
      })
      .catch((err) => console.log('err-', err));
  };

  useEffect(() => {
    fetch(`/api/category/getOne/${id}`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((result) => {
        setCategory(result?.category);
        setOldImages(result?.img);
        setLoading(false);
      })
      .catch((error) => console.log('error', error));
  }, [id]);

  const updateProductImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImg([]);
    setImagesPreview([]);
    setOldImages([]);

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
    updateCategory(category, img);
  };


  const back = (e) => {
    e.preventDefault();
    navigate.push('/dashboard/category');
  };

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4" gutterBottom sx={{ fontFamily: 'Open Sans', fontWeight: '600' }}>
          Update Category
        </Typography>
      </Stack>
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CircularProgress />
        </Box>
      ) : (
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
            label="Category"
            type="text"
            margin="normal"
          />
          <br/>
          <div className={classes.formFields}>
        <div className={styles.createProductFormFile}>
              <input
                type="file"
                name="avatar"
                accept="image/*"
                onChange={updateProductImagesChange}
                multiple
              />
            </div>

            <div className={styles.createProductFormImage}>
            {oldImages &&
                oldImages.map((image, index) => (
                  <img key={index} src={image.url} alt="Old Product Preview" />
                ))}
            </div>

            <div className={styles.createProductFormImage}>
              {imagesPreview.map((image, index) => (
                <img key={index} src={image} alt="Product Preview" />
              ))}
            </div>
        </div>
          </>
          <ButtonGroup className={classes.buttons} aria-label="outlined primary button group">
            <Button onClick={(e) => back(e)} style={{ fontFamily: 'Open Sans', minWidth: '90px' }}>
              Back
            </Button>
            <Button variant="contained" type="submit" style={{ fontFamily: 'Open Sans', minWidth: '90px' }}>
              Update
            </Button>
          </ButtonGroup>
        </Box>
      )}
    </Container>
  );
}

export default UpdateCategory;

UpdateCategory.getLayout = function PageLayout(page) {
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
    textEditor: {
      flexBasis: '91.5%',
      [theme?.breakpoints?.down('sm')]: {
        flexBasis: '90%',
      },
    },
    buttons: {
      flexBasis: '91.5%',
      justifyContent: 'flex-end',
    },
  })
);
