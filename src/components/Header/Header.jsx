import { Link } from "react-router-dom";
import { Button, Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useMediaQuery } from "react-responsive";

import Hamburger from "./Hamburger";

const Header = () => {
  const mobileView = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    <>
      {mobileView && <Hamburger />}
      <Container
        maxWidth="xl"
        sx={{
          paddingTop: "1em",
          zIndex: 1,
          position: "absolute",
          display: { xs: "none", sm: "initial" },
        }}
      >
        <Grid container columnSpacing={2} justifyContent={"flex-end"}>
          <Grid item>
            <Link to="/">
              <Button variant="outlined" size="small">
                Home
              </Button>
            </Link>
          </Grid>
          <Grid item>
            <Link to="/about">
              <Button variant="outlined" size="small">
                About
              </Button>
            </Link>
          </Grid>
          <Grid item>
            <Link to="/services">
              <Button variant="outlined" size="small">
                Services
              </Button>
            </Link>
          </Grid>
          <Grid item>
            <Link to="/contact">
              <Button variant="outlined" size="small">
                Contacts
              </Button>
            </Link>
          </Grid>
          <Grid item>
            <Link to="/portfolio">
              <Button variant="contained">Portfolio</Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Header;
