import styles from "./product.module.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";

export default function BrandPage() {
  const router = useRouter();
  const [title, setTitle] = useState([]);

  const [loading, setLoading] = useState(true);

  const [plus, setPlus] = useState(0);

  const deleteOrder = (id) => {
    axios.delete(`/api/brand/delete/${id}`).then(
      () => setPlus(plus + 1),
      axios
        .get(`/api/brand/get`)
        .then((res) => {
          setTitle(res?.data?.title);
          setLoading(false);
        })
        .catch((error) => console.log(error))
    );
  };

  useEffect(() => {
    if (localStorage.getItem("user") == null) {
      router.push("/login");
    }
    axios
      .get(`/api/brand/get`)
      .then((res) => {
        setTitle(res?.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, [plus]);

  const createNew = (e) => {
    e.preventDefault();
    router.push("/dashboard/brands/newBrand");
  };

  const columns = [
    {
      field: "title",
      headerName: <b>Brand Name</b>,
      width: 300,
    },
    {
      field: "action",
      headerName: <b>Action</b>,
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link href={"/dashboard/brands/" + params.row._id}>
              <Button className={styles.productListEdit}>Edit</Button>
            </Link>
            <DeleteOutline
              className={styles.productListDelete}
              onClick={() => deleteOrder(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className={styles.productList}>
      <h1 className={styles.addProductTitle}>Orders</h1>
      <Button
        variant="contained"
        onClick={createNew}
        style={{ alignContent: "left" }}
        className={styles.addProductButton}
      >
        Add New Brand
      </Button>
      <div style={{ width: "100%", height: "500px" }}>
        <DataGrid
          rows={title || ""}
          disableSelectionOnClick
          columns={columns}
          getRowId={(row) => row._id}
          checkboxSelection
          // onSelectionModelChange={(ids) => onRowsSelectionHandler(ids)}
        />
      </div>
    </div>
  );
}

BrandPage.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
