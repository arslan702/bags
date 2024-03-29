import styles from './product.module.css';
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { Button, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import axios from "axios";
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function ProductPage() {
  const router = useRouter();
  const [totalProducts, setTotalProducts] = useState();
  const [pageSize, setPageSize] = useState();
  const [diff, setDiff] = useState();
  const [field, setField] = useState();
  const [page, setPage] = useState(0);
  const [selectedRows, setSelectedRows] = useState([])

  const [product, setProduct] = useState([]);

  const [loading, setLoading] = useState(true);

  const [plus, setPlus] = useState(0);

  const deleteProduct = (id) => {
    axios.delete(`/api/product/delete/${id}`).then(
      () => setPlus(plus + 1),
      axios
        .get(`/api/product/get?page=${page+1}&size=8&sorts=-1`)
        .then((res) => {
          setProduct(res.data.products);
          setTotalProducts(res.data.totalProducts);
          setPageSize(res.data.pageSize)
          setLoading(false);
        })
        .catch((error) => console.log(error))
    );
  };

  useEffect(() => {
    if(localStorage.getItem('user') == null){
      router.push('/login')
    }
    axios
      .get(`/api/product/get?page=${page+1}&size=8&sorts=-1`)
      .then((res) => {
        setProduct(res.data.products);
        setTotalProducts(res.data.totalProducts);
        setPageSize(res.data.pageSize)
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, [plus, page]);

  const handleDiffSearch = (e) => {
    e.preventDefault();
    axios
      .get(`/api/product/get?page=${page+1}&size=8&field=${field}&search=${diff}&sorts=-1`)
      .then((res) => {
        setProduct(res.data.products);
        setTotalProducts(res.data.totalProducts);
        setPageSize(res.data.pageSize)
        console.log(res.data.products)
        setLoading(false);
      })
      .catch((error) => console.log(error));
    setDiff("");
    // setField('')
  };

  const createNew = (e) => {
        e.preventDefault();
        router.push("/dashboard/products/newProduct");
      };

  const handleDetails = (e, id) => {
    e.preventDefault();
    router.push(`/dashboard/products/detail/${id}`);
  };

  const onRowsSelectionHandler = (ids) => {
    const selectedRowsData = ids.map((id) => product.find((prod) => prod._id === id));
    setSelectedRows(selectedRowsData)
  }

  const columns = [
    {
      field: "title",
      headerName: <b>Name</b>,
      width: 180,
    },
    {
      field: "category",
      headerName: <b>Brand</b>,
      width: 160,
    },
    {
      field: "sub",
      headerName: <b>Category</b>,
      width: 160,
    },
    { field: "price", headerName: <b>Price</b>, width: 120 },
    {
      field: "oldPrice",
      headerName: <b>Old Price</b>,
      width: 120,
    },
    {
      field: "stock",
      headerName: <b>Stock</b>,
      width: 100,
    },
    {
      field: "trending",
      headerName: <b>Trending</b>,
      width: 100,
    },
    {
      field: "hot",
      headerName: <b>Hot Selling</b>,
      width: 100,
    },
    {
      field: "details",
      headerName: <b>Details</b>,
      width: 180,
      renderCell: (params) => {
        return (
          <>
            <button className={styles.productListEdit} onClick={(e) => handleDetails(e, params.row._id)}>view details</button>
          </>
        )
      }
    },
    {
      field: "action",
      headerName: <b>Action</b>,
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link href={"/dashboard/products/" + params.row._id}>
              <button className={styles.productListEdit}>Edit</button>
            </Link>
            <DeleteOutline
              className={styles.productListDelete}
              onClick={() => deleteProduct(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className={styles.productList}>
      <h1 className={styles.addProductTitle}>Products</h1>
      <Button
        variant='contained'
        onClick={createNew}
        style={{ alignContent: "left" }}
        className={styles.addProductButton}
      >
        Create New Product
      </Button>
      <div>
        <InputLabel id="demo-select-small" style={{ width: "10%" }}>
          Select
        </InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={field}
          label="Field"
          onChange={(e) => setField(e.target.value)}
        >
          <MenuItem value={"title"}>Name</MenuItem>
          <MenuItem value={"category"}>Brand</MenuItem>
          <MenuItem value={"sub"}>Category</MenuItem>
          <MenuItem value={"price"}>Price</MenuItem>
          <MenuItem value={"oldPrice"}>Old Price</MenuItem>
          <MenuItem value={"stock"}>Stock</MenuItem>
          <MenuItem value={"trending"}>Trending</MenuItem>
          <MenuItem value={"hot"}>Hot Selling</MenuItem>
        </Select>
        <TextField
          style={{ marginLeft: "40px" }}
          id="outlined-required"
          label="search with different values"
          placeholder="e.g bag:shirt:cap"
          value={diff}
          onChange={(e) => setDiff(e.target.value)}
        />{" "}
        <Button
          variant='contained'
          style={{ marginLeft: "30px" }}
          onClick={handleDiffSearch}
          className={styles.addProductButton}
        >
          Search
        </Button>
      </div><br/>
      <div style={{width: '100%', height: '500px'}}>
      <DataGrid
        rows={product || ""}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        rowCount={totalProducts}
        pageSize={pageSize}
        page={page}
        onPageChange={(newPage) => setPage(newPage)}
        pagination
        checkboxSelection
        onSelectionModelChange={(ids) => onRowsSelectionHandler(ids)}
        paginationMode="server"
      />
      </div>
    </div>
  );
}


ProductPage.getLayout = function PageLayout(page) {
  return <>{page}</>;
};