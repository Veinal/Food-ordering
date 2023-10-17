import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, TextField, Typography, Grid, Paper, Container, Select, MenuItem } from '@mui/material';

const containerStyle = {
  backgroundImage : "url('https://images.unsplash.com/photo-1543353071-10c8ba85a904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  minHeight: '100vh',
  // display: 'flex',
  // flexDirection: 'column',
  // alignItems: 'center',
  // justifyContent: 'center',
};


const paperStyle = {
  border: '1px solid #007bff',
  borderRadius: '10px',
  padding: '20px',
  backgroundColor: 'rgba(255, 255, 255, 255)'
};

export default function Editprolist() {
  const params = useParams();
  const navigate = useNavigate();
  let productID = params.id;

  const [upd, setUpd] = useState([]);
  const [disp, setDisp] = useState({});
  const [index, setIndex] = useState(null);

  useEffect(() => {
    const locget = JSON.parse(localStorage.getItem("Food"));
    setUpd(locget);

    let select = locget.find((obj) => obj.id == productID);
    setDisp(select);

    const ProdIndex = locget.findIndex((e) => e.id == productID);
    setIndex(ProdIndex);
  }, []);

  const handleChange = (e) => {
    setDisp({ ...disp, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const updatedData = [...upd];
    updatedData.splice(index, 1, disp);
    localStorage.setItem("Food", JSON.stringify(updatedData));

    await navigate('/productlist');
  };

  return (
    <div style={containerStyle}>
      <Container maxWidth="sm">
        <Paper style={paperStyle}>
          <Typography variant="h4" align="center" gutterBottom >
            <strong>UPDATE PRODUCT</strong>
          </Typography>
          <form>
            <Grid container spacing={3}>
              {/* ...Input fields as in the previous example... */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="product"
                  label="Product Name"
                  variant="outlined"
                  value={disp?.product}
                  onChange={(e) => handleChange(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="image"
                  label="Image URL"
                  variant="outlined"
                  value={disp?.image}
                  onChange={(e) => handleChange(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="price"
                  label="Price"
                  type="number"
                  variant="outlined"
                  value={disp?.price}
                  onChange={(e) => handleChange(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <Select
                  fullWidth
                  name="status"
                  label="Status"
                  variant="outlined"
                  value={disp?.status}
                  onChange={(e) => handleChange(e)}
                >
                  <MenuItem value="Available">Available</MenuItem>
                  <MenuItem value="Not Available">Not Available</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="category"
                  label="Category"
                  variant="outlined"
                  value={disp?.category}
                  onChange={(e) => handleChange(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="description"
                  label="Description"
                  variant="outlined"
                  value={disp?.description}
                  onChange={(e) => handleChange(e)}
                />
              </Grid>
            </Grid>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
              <Button variant="contained" color="success" type="submit" onClick={handleSubmit}>
                Submit
              </Button>
            </div>
          </form>
        </Paper>
      </Container>
    </div>
  );
}
