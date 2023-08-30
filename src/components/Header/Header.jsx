import { Link } from "react-router-dom";
import { Button, Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import Hamburger from "./Hamburger";



const Header = () => {
  return (
    <>
      <Hamburger />
      <Container
        maxWidth="xl"
        sx={{ paddingTop: "1em", zIndex: 1, position: "absolute", display: {xs: 'none', sm: 'initial'}}}
      >
        <Grid container columnSpacing={2} justifyContent={"flex-end"}>
          <Grid item>
            <Button variant="outlined" size="small">
              Home
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" size="small">
              About
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" size="small">
              Services
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" size="small">
              Contacts
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained">Portfolio</Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Header;
