import React from 'react'
import Box from '@mui/material/Box';
// material
import { styled } from '@mui/material/styles';

const logo = require('../assets/logo.png')

const Rootstyle = styled(Box)(() => ({
    overflow: 'auto',
    margin: 'auto',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 150
}));

const ProductImgStyle = styled('img')({
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  });

const Logo = () => {
    return (
        <Rootstyle>
            <ProductImgStyle src={logo} alt="logo"/>
        </Rootstyle>
    )
}

export default Logo;
