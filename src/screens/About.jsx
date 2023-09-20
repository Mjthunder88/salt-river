import { Box, Grid, Typography, Button } from "@mui/material";
import portrait from "../Assets/Background-photos/portrait-temp.jpg";

import banner from "../Assets/Background-photos/banner-main.jpg";

const About = () => {
  return (
    <>
      <Grid container>
        <Grid
          sx={{
            background: `url(${banner})`,
            backgroundSize: "cover",
            width: "100vw",
            height: "40vh",
          }}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Typography variant="h2">About</Typography>
        </Grid>
      </Grid>
      <Grid container justifyContent={"center"} padding={"5em 0"}>
        <Grid flexBasis={"30%"} width={"100%"}>
          <Typography variant="h4">Established in 2021</Typography>
          <img
            src={portrait}
            alt="portrait of individual."
            style={{ width: "400px", height: "auto" }}
          />
        </Grid>
        <Grid flexBasis={"35%"} >
          <Grid>
            <Typography variant="h5">About me</Typography>
          </Grid>
          <Grid>
            <Typography>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
              sapiente fugiat tenetur ipsa assumenda totam illo rerum autem enim
              aut quos animi, perspiciatis ipsum? Deleniti perspiciatis earum
              sequi quos iste.
            </Typography>
            <Grid>
              <Typography>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
                fugiat officiis dolore exercitationem sint ducimus cumque hic
                qui aut et. Eius, ipsam ducimus? Dicta voluptatum nisi deserunt
                quo ratione totam.
              </Typography>
            </Grid>
            <Grid>
              <Typography>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
                fugiat officiis dolore exercitationem sint ducimus cumque hic
                qui aut et. Eius, ipsam ducimus? Dicta voluptatum nisi deserunt
                quo ratione totam.
              </Typography>
            </Grid>
            <Grid>
              <Typography>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
                fugiat officiis dolore exercitationem sint ducimus cumque hic
                qui aut et. Eius, ipsam ducimus? Dicta voluptatum nisi deserunt
                quo ratione totam.
              </Typography>
            </Grid>

            <Grid>
              <Button variant="outlined">SCHEDULE WITH ME</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Box sx={{backgroundColor: "#75727245", textAlign: "center", padding: "5em 2em"}}>
        <Typography variant="h4">A Seamless process</Typography>
      </Box>
    </>
  );
};

export default About;
