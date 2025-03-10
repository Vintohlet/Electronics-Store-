import { Container, Box, Typography, Button, Modal } from "@mui/material";
import { Link } from "react-router-dom";
import { CATAlOG_PAGE } from "../utils/consts";
import React from "react";
import mainLaptopsImg from "../assets/img/mainlaptops.png";
import deliveryImg from "../assets/img/delivery.png";
import { Grid } from "@mui/material";
export default function MainPage() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <main>
      <div className="page">
        <Container maxWidth="lg" sx={{minHeight:"100vh"}}>
          <Grid container sx={{ py: 10 }}>
            <Grid item md={6} sm={12}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: { md: "flex-start", xs: "center" },
                  justifyContent: "center",
                  textAlign: { md: "left", xs: "center" },
                }}
              >
                <Typography variant="h3" sx={{ fontWeight: "500" }}>
                  Huge Choise of Electronics
                </Typography>
                <Typography
                  variant="p"
                  sx={{ fontWeight: "400", marginTop: 4, textAlign: "right" }}
                >
                  Smartphones,Laptops, TVs and more!
                </Typography>
                <Link to={CATAlOG_PAGE} className="link">
                  <Button variant="contained" sx={{ marginTop: 6 }}>
                    Check Catalog
                  </Button>
                </Link>
              </Box>
            </Grid>
            <Grid item md={6} sm={12} sx={{display:{sm:"flex"},justifyContent:{sm:"center"}, alignItems:{sm:"center"}, mt:6}}>
              <img src={mainLaptopsImg} alt="Laptop" className="laptop_image" />
            </Grid>
            <Grid item md={6} sm={12} sx={{ mt: 8 }}>
              <Box>
                <img
                  src={deliveryImg}
                  alt="delivery"
                  className="delivery-image"
                />
              </Box>
            </Grid>
            <Grid item md={6} xs={12} sx={{ mt: 8 }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: { md: "flex-end", xs: "center" },
                  textAlign: { md: "right", xs: "center" },
                }}
              >
                <Typography
                  variant="h3"
                  sx={{ fontWeight: "500", textAlign: "right" }}
                >
                  Delivery
                </Typography>
                <Typography
                  variant="p"
                  sx={{ fontWeight: "400", marginTop: 6, textAlign: "right" }}
                >
                  We will deliver you anywhere in the world!
                </Typography>
                <Button
                  variant="contained"
                  sx={{ marginTop: 6 }}
                  onClick={handleOpen}
                >
                  Find out the terms of delivery
                </Button>
              </Box>
            </Grid>
          </Grid>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                The terms of delivery
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Delivery in Kazakhstan: Free, Worldwide: depending on the total
                cost
              </Typography>
            </Box>
          </Modal>
        </Container>
      </div>
    </main>
  );
}
