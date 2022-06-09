import * as React from 'react'

import {
    Grid,
    Typography,
    Box, 
    Paper,
    Divider,
    Button
} from '@mui/material'

import Link from 'next/link'

import { useStyles } from './MarketToolbarStyles'
import { FaEthereum } from 'react-icons/fa'
import { IoWalletSharp } from 'react-icons/io5'
import { useRouter } from 'next/router'

const MarketToolbar: React.FunctionComponent = () => {
  const classes = useStyles()
  const router = useRouter()
  
    return (
      <Box component={Paper}  elevation={0} 
      classes={{
        root: classes.container
      }}
      >
          <Grid
          flexWrap="nowrap"
          container
          direction="column">
              <Grid item sx={{p: 1}}>
                <Typography color='#212121' noWrap fontWeight='bold' fontSize={12}>
                  <IoWalletSharp size={10} />  Web3/Wallet Provider:{' '}
                </Typography>
                <Typography color='#212121' fontWeight="light" fontSize={12}>
                  MetaMask
                </Typography>
              </Grid> 
              <Divider />
              <Grid item sx={{p: 1}}>
                <Typography color='#212121' fontWeight='bold' fontSize={12}>
                  <FaEthereum size={10} /> DAI Balance:{' '}
                </Typography>
                <Typography color='#212121' fontWeight="light" fontSize={12}>
                  $125.64
                </Typography>
              </Grid>
              <Divider />
              <Grid item sx={{p: 1}}>
                <Typography color='#212121' fontWeight='bold' fontSize={12}>
                  <FaEthereum size={10} /> UST Balance:{' '}
                </Typography>
                <Typography color='#212121' fontWeight="light" fontSize={12}>
                  $23.22
                </Typography>
              </Grid>

        </Grid>
      </Box>
    )
}

export default MarketToolbar



      