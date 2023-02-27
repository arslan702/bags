import {
  Box,
  Button,
  ButtonGroup,
  CircularProgress,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

function UpdateBrand() {
  const navigate = useRouter();
  let { id } = navigate.query;
  const classes = useStyles();
  const [title, setTitle] = useState([]);
  const [loading, setLoading] = useState(true);

  const updateCategory = (title) => {
    axios
      .patch(`/api/brand/update/${id}`, { title })
      .then((res) => {
        navigate.push("/dashboard/brands");
      })
      .catch((err) => console.log("err-", err));
  };

  useEffect(() => {
    fetch(`/api/brand/getOne/${id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => {
        setTitle(result?.title);
        setLoading(false);
      })
      .catch((error) => console.log("error", error));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateCategory(title);
  };

  const back = (e) => {
    e.preventDefault();
    navigate.push("/dashboard/brands");
  };

  return (
    <Container>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={5}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontFamily: "Open Sans", fontWeight: "600" }}
        >
          Update Brand
        </Typography>
      </Stack>
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      ) : (
        <Box
          component="form"
          onSubmit={handleSubmit}
          className={classes.form}
          sx={{
            "& > :not(style)": { m: 1, width: "" },
          }}
        >
          <TextField
            className={classes.formFields}
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            label="Brand Name"
            type="text"
            margin="normal"
          />
          <ButtonGroup
            className={classes.buttons}
            aria-label="outlined primary button group"
          >
            <Button
              onClick={(e) => back(e)}
              style={{ fontFamily: "Open Sans", minWidth: "90px" }}
            >
              Back
            </Button>
            <Button
              variant="contained"
              type="submit"
              style={{ fontFamily: "Open Sans", minWidth: "90px" }}
            >
              Update
            </Button>
          </ButtonGroup>
        </Box>
      )}
    </Container>
  );
}

export default UpdateBrand;

UpdateBrand.getLayout = function PageLayout(page) {
  return <>{page}</>;
};

const useStyles = makeStyles((theme) =>
  createStyles({
    form: {
      display: "flex",
      flexWrap: "wrap",
    },
    formFields: {
      flexBasis: "45%",
      margin: "10px",
      [theme?.breakpoints?.down("sm")]: {
        flexBasis: "90%",
      },
    },
    buttons: {
      flexBasis: "91.5%",
      justifyContent: "flex-end",
    },
  })
);
