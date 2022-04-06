import React, { useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '../../common/Container';
import { useRouter } from 'next/router';
import {
  Headline,
  Content,
} from './components';

const DownloadDataset = () => {
  const theme = useTheme();
  const router = useRouter();

  useEffect(()=>{
    const automatumIsCanGetDataset = JSON.parse(sessionStorage.getItem('automatumIsCanGetDataset'))
    if(automatumIsCanGetDataset !== true){
      router.push('/get-free-dataset');
    }
  })

  return (
    <Box>
      <Box
        sx={{
          backgroundColor: theme.palette.alternate.main,
          backgroundImage: `linear-gradient(120deg, ${theme.palette.background.paper} 0%, ${theme.palette.alternate.main} 100%)`,
        }}
      >
        <Container id="Headline">
          <Headline />
        </Container>
      </Box>
      <Container maxWidth={1000} paddingBottom={'0 !important'} id="Form">
        <Content/>
      </Container>
    </Box>
  );
};

export default DownloadDataset;
