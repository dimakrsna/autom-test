import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
// import droneImage from '../../../../public/images/drone.png';
import image3 from '../../../../public/images/Illustration-3.png';
import { ImageStyled } from './styles';
import { useTranslation } from 'next-i18next';

const FromAirToTrafic  = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const { t } = useTranslation('home');

  return (
    <Box>
      <Grid
        container
        spacing={4}
        flexDirection={isMd ? 'row' : 'column-reverse'}
      >
        <Grid
          item
          container
          justifyContent={'center'}
          xs={12}
          md={6}
          width={'100%'}
        >
          <ImageStyled src={image3} alt="img" />
        </Grid>
        <Grid item xs={12} md={6} container alignItems={'center'}>
          <Box data-aos={isMd ? 'fade-left' : 'fade-up'}>
            <Box marginBottom={2}>
              <Typography variant={'h4'} sx={{ fontWeight: 700 }} gutterBottom>
                {t('from-air-to-traffic-data')}
              </Typography>
              <Typography color="text.secondary" marginBottom={2}>
                {t('top-view-footage')}
              </Typography>
              <Typography color="text.secondary">
                {t('we-deliver-suitable-data')}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FromAirToTrafic;
