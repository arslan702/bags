import { Box, Button, ButtonGroup, Container, FormControl, FormControlLabel, FormLabel, MenuItem,Radio, RadioGroup, Stack, TextField, Typography } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import styles from './product.module.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { LoadingButton } from '@mui/lab';

function NewProduct() {
  const classes = useStyles();
  // const [open, setOpen] = useState(false);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [oldPrice, setOldPrice] = useState('');
  const [category, setCategory] = useState('');
  const [sub, setSub] = useState('');
  const [stock, setStock] = useState('');
  const [trending, setTrending] = useState('no');
  const [hot, setHot] = useState('no');
  const [img, setImg] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);
  const [option, setOption] = useState([]);
  const [subCategory, setSubCategory] = useState([])
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    axios
      .get(`/api/brand/get`)
      .then((res) => {
        setOption(res.data);
      })
      .catch((error) => console.log(error));
      // if(category !== ''){
        axios
      .get(`/api/category/get`)
      .then((res) => {
        setSubCategory(res?.data)
      })
      // }
  }, [category]);

  const createProduct = ({ title, description, price, oldPrice, category, sub, stock, trending, hot, img }) => {
    axios
      .post(`/api/product/create`, { title, description, price, oldPrice, category, sub, stock, trending, hot, img })
      .then((res) => {
        router.push('/dashboard/products');
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setLoading(false);
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
    setLoading(true);
    createProduct({ title, description, price, oldPrice, category, sub, stock, trending, hot, img });
  };

  const back = (e) => {
    e.preventDefault();
      router.push('/dashboard/products')
  };

  const handleChange = (e) => {
    // e.preventDefault();
    setCategory(e.target.value)
    setSub('');
  }

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4" gutterBottom sx={{ fontFamily:'Open Sans', fontWeight:'600'}}> 
          New Product
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
          required
          label="Title"
          type="text"
          margin="normal"
        />
        <TextField
          className={classes.formFields}
          select
          required
          onChange={handleChange}
          value={category}
          label="Brands"
          type="text"
          margin="normal"
        >
          {option?.map((opt) => (
            <MenuItem key={opt?._id} value={opt?.title}>
              {opt?.title}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          className={classes.formFields}
          select
          onChange={(e) => setSub(e.target.value)}
          value={sub}
          required
          label="Category"
          type="text"
          margin="normal"
        >
          {subCategory?.map((sub) => (
            <MenuItem key={sub?._id} value={sub?.category}>
              {sub?.category}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          className={classes.formFields}
          onChange={(e) => setPrice(e.target.value)}
          value={price}
          label="Price"
          type="text"
          margin="normal"
        />
        <TextField
          className={classes.formFields}
          onChange={(e) => setOldPrice(e.target.value)}
          value={oldPrice}
          label="Old Price"
          type="text"
          margin="normal"
        />
        </>
        <br/>
        <TextField
          className={classes.formFields}
          onChange={(e) => setStock(e.target.value)}
          value={stock}
          label="Stock"
          type="text"
          margin="normal"
        />
        <textarea
          className={classes.formFields}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder='Description'
          style={{padding: '10px'}}
        />
        <FormControl className={classes.formFields}>
          <FormLabel id="demo-radio-buttons-group-label" sx={{ fontFamily:'Open Sans'}}>Trending Product</FormLabel>
          <RadioGroup onChange={(e) => setTrending(e.target.value)} value={trending} aria-labelledby="demo-radio-buttons-group-label" defaultValue="no" name="radio-buttons-group">
            <FormControlLabel value="yes" control={<Radio />} label="yes" />
            <FormControlLabel value="no" control={<Radio />} label="no" />
          </RadioGroup>
        </FormControl>
        <FormControl className={classes.formFields}>
          <FormLabel id="demo-radio-buttons-group-label" sx={{ fontFamily:'Open Sans'}}>Hot Selling</FormLabel>
          <RadioGroup onChange={(e) => setHot(e.target.value)} value={hot} aria-labelledby="demo-radio-buttons-group-label" defaultValue="no" name="radio-buttons-group">
            <FormControlLabel value="yes" control={<Radio />} label="yes" />
            <FormControlLabel value="no" control={<Radio />} label="no" />
          </RadioGroup>
        </FormControl>
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

        <ButtonGroup className={classes.buttons} aria-label="outlined primary button group">
          <Button onClick={(e) => back(e)} style={{fontFamily:"Open Sans", minWidth:"90px"}}>Back</Button>
          <LoadingButton loading={loading} variant="contained" type="submit" style={{fontFamily:"Open Sans", minWidth:"90px"}}>
            Create
          </LoadingButton>
        </ButtonGroup>
      </Box>
    </Container>
  );
}

export default NewProduct;

NewProduct.getLayout = function PageLayout(page) {
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
