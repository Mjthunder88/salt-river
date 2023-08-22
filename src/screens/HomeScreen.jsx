import React from 'react'

import { Container, Typography, Stack, Button, Paper } from '@mui/material'
import bannerMain from '../Assets/Background-photos/banner.jpg'
import miniPhoto1 from '../Assets/mini-photos/mini-photo-1.jpg'
import miniPhoto2 from '../Assets/mini-photos/mini-photo-2.jpg'
import miniPhoto3 from '../Assets/mini-photos/mini-photo-3.jpg'

const paperStyles = {
  
    width: 300,
    height: 300,
    padding: '2em',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '2em 0',
    fontSize: '2em',
    color: 'white'
}

const HomeScreen = () => {
  return (
    <>
    <Container maxWidth='disabled' sx={{background: `url(${bannerMain})`, backgroundSize: 'cover', height: '100vh'}}>
        <Stack justifyContent={'center'} alignItems={'center'} flexDirection={'column'} sx={{height: '100%'}}>
            <Typography varient='h1' component='h1'>The SaltRiver Difference</Typography>
            <Typography varient='subtitle1' color={'white'}>Details, big and small are important to us. We possess great passion and purpose behind the spaces we create for our clients to live and work.</Typography>
            <Button varient='contained'>Schedule Consultaion</Button>
        </Stack>
    </Container>
    <Stack justifyContent={'center'} alignItems={'center'} flexDirection={'row'} columnGap={'2em'} >
    <Paper sx={[paperStyles, {background: `url(${miniPhoto1})`, backgroundSize: 'cover'}]}>Portfolio</Paper>
    <Paper sx={[paperStyles, {background: `url(${miniPhoto2}) `, backgroundSize: 'cover'}]}>Services</Paper>
    <Paper sx={[paperStyles, {background: `url(${miniPhoto3})`, backgroundSize: 'cover'}]}>Social</Paper>
    </Stack>
    </>
  )
}

export default HomeScreen