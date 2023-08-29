import React from "react";

import { Box, Stack, Typography, Button } from "@mui/material";
import stickyBackground from "../../Assets/Background-photos/background-sub.jpg";

const Question = () => {
  return (
    <Box
      sx={{
        background: `url(${stickyBackground})`,
        backgroundSize: "cover",
        minHeight: "50vh",
        width: "100%",
        position: "sticky",
        overflowY: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Stack justifyContent={"center"} alignItems={"center"}>
        <Typography>Questions</Typography>
        <Typography>
          If you're intersted in builing a home or need more information.
        </Typography>
        <Button variant="outlined">Let's Talk Now</Button>
      </Stack>
    </Box>
  );
};

export default Question;
