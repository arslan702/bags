import React from 'react'
import styles from './trending.module.css'
import { Container } from '@mui/material';
import Grid from '@mui/system/Unstable_Grid';
import Slider from '../Slider/Slider';
import { productData } from '../Slider/data';

export default function Trending() {
    return (
        <div>
            <div className={styles.trending} >
<Container>
<Grid container>
<Grid item >

</Grid>
</Grid>
</Container>
<Slider title='Trending Now' products={productData}/>
            </div>
        </div>
    )
}

