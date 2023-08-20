import React from 'react'

import { Container, Typography, Stack, Button } from '@mui/material'
import bannerMain from '../Assets/Background-photos/banner.jpg'

const HomeScreen = () => {
  return (
    <Container maxWidth='disabled' sx={{background: `url(${bannerMain})`, backgroundSize: 'cover', height: '100vh'}}>
        <Stack justifyContent={'center'} alignItems={'center'} flexDirection={'column'} sx={{height: '100%'}}>
            <Typography varient='h1' component='h1'>The SaltRiver Difference</Typography>
            <Typography varient='subtitle1' color={'white'}>Details, big and small are important to us. We possess great passion and purpose behind the spaces we create for our clients to live and work.</Typography>
            <Button varient='contained'>Schedule Consultaion</Button>
        </Stack>
    </Container>
  )
}

export default HomeScreen