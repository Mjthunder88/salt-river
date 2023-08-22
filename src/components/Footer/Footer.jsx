import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import { Typography, Box, Stack } from '@mui/material'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <>
    <Grid sx={{padding: '1em'}} container justifyContent={'space-evenly'}>
        <Grid item>Logo</Grid>
        <Grid item >
            <Stack columnGap={'1em'} flexDirection={'row'}>
            <MailOutlineIcon />
            <InstagramIcon />
            </Stack>
        </Grid>
        <Grid item>
            <Typography variant='h6'>Section</Typography>
                <Stack sx={{paddingTop: '1em'}}>
                    <Typography variant='p'>About Us</Typography>
                    <Typography variant='p'>Privacy Policy</Typography>
                </Stack>
        </Grid>
        <Grid item>
            <Typography variant='h6'>Connect</Typography>
                <Stack sx={{paddingTop: '1em'}}>
                <Typography variant='p'>Contact Us</Typography>
                <Typography variant='p'>Schedule Consult</Typography>
                </Stack>
        </Grid>
    </Grid>
    <Box sx={{borderTop: 'solid 1px', textAlign: 'center', padding: '2em'}}>
        <Typography>Copyright 2023 Salt River Co</Typography>
    </Box>
    </>
  )
}

export default Footer