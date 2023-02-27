import { Button } from "@mui/material";
import { useRouter } from "next/router";
import React, { Fragment, useEffect, useState } from "react"
import styles from "./detail.module.css";

const CategoryDetails = () => {
  const navigate = useRouter();
  let { id } = navigate.query;

  const [category, setCategory] = useState([]);
  const [img, setImg] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(`/api/category/getOne/${id}`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((result) => {
        setCategory(result?.category);
        setImg(result?.img)
        setLoading(false);
      })
      .catch((error) => console.log('error', error));
  }, [id]);

  const back = (e) => {
    e.preventDefault();
    navigate.push('/dashboard/category')
  }

  return (
    <Fragment>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Fragment>
          <div className={styles.ProductDetails}>
            <div>
                {img &&
                    <img
                      className={styles.CarouselImage}
                      src={img[0]?.url}
                      alt={`category img`}
                    />
                  }
            </div>

            <div>
              <div className={styles.detailsBlock1}>
                <h2>{category}</h2>
              </div>
            </div>
          </div>
          <Button onClick={(e) => back(e)} style={{alignContent: 'flex-start', width: '100px'}}>Back</Button>
        </Fragment>
      )}
    </Fragment>
  );
};

export default CategoryDetails;

CategoryDetails.getLayout = function PageLayout(page) {
  return <>{page}</>;
};