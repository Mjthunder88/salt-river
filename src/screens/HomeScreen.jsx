import React from "react";

import { Container, Typography, Stack, Button, Paper, Box } from "@mui/material";
import bannerMain from "../Assets/Background-photos/banner.jpg";
import miniPhoto1 from "../Assets/mini-photos/mini-photo-1.jpg";
import miniPhoto2 from "../Assets/mini-photos/mini-photo-2.jpg";
import miniPhoto3 from "../Assets/mini-photos/mini-photo-3.jpg";

import Question from "../components/SubHomeContent/Question";

const paperStyles = {
  width: 300,
  height: 300,
  padding: {sm: '1em', md: '1em', lg: '2em'},
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: '2em 0',
  fontSize: "2em",
  color: "white",
  flex: {sm: 'calc(70% - 300px)', md: 'calc(70% - 300px)', lg: 'calc(20% - 300px)', xl: 'calc(30% - 300px)'}
};

const HomeScreen = () => {
  return (
    <>
      <Container
        maxWidth="disabled"
        sx={{
          background: `url(${bannerMain})`,
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          sx={{ height: "100%" }}
        >
          <Typography variant="h2" component="h1">
            The SaltRiver Difference
          </Typography>
          <Typography variant="subtitle1" color={"white"}>
            Details, big and small are important to us. We possess great passion
            and purpose behind the spaces we create for our clients to live and
            work.
          </Typography>
          <Button variant="contained">Schedule Consultaion</Button>
        </Stack>
      </Container>
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"row"}
        columnGap={"2em"}
        flexWrap={"wrap"}
        padding={{sm: '2em', xl: '2em'}}
      >
        <Paper
          sx={[
            paperStyles,
            { background: `url(${miniPhoto1})`, backgroundSize: "cover" },
          ]}
          sm
        >
          <Box>
          <Typography variant="h4">Portfolio</Typography>
          </Box>
        </Paper>
        <Paper
          sx={[
            paperStyles,
            { background: `url(${miniPhoto2}) `, backgroundSize: "cover" },
          ]}
        >
          <Typography variant="h4">Services</Typography>
        </Paper>
        <Paper
          sx={[
            paperStyles,
            { background: `url(${miniPhoto3})`, backgroundSize: "cover" },
          ]}
        >
          <Typography variant="h4">Social</Typography>
        </Paper>
      </Stack>
      <Question />
    </>
  );
};

export default HomeScreen;
