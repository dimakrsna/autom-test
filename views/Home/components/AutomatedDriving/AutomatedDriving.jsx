import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { ImageStyled } from './styles';
// import droneImage from '../../../../public/images/drone.png';
import image2 from '../../../../public/images/Illustration-2.png';
import { useTranslation } from 'next-i18next';

const AutomatedDriving = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const { t } = useTranslation('home');

  return (
    <Box>
      <Box marginBottom={4}>
        <Box
          component={Typography}
          fontWeight={700}
          variant={'h3'}
          align={'center'}
          gutterBottom
        >
          {t('scaling-real-world')}
        </Box>
        <Typography
          variant="h6"
          component={'p'}
          color={'textSecondary'}
          align={'center'}
        >
          {t('dont-approximate-the-real-world')}
        </Typography>
      </Box>
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
          <ImageStyled loading="lazy" src={image2} alt="drone" />
        </Grid>
        <Grid item xs={12} md={6} container alignItems={'center'}>
          <Box data-aos={isMd ? 'fade-left' : 'fade-up'}>
            <Box marginBottom={2}>
              <Typography variant={'h4'} sx={{ fontWeight: 700 }} gutterBottom>
                {t('automated-driving-needs-scaled-verification')}
              </Typography>
              <Typography color="text.secondary" marginBottom={2}>
                {t('the-real-world-variance')}
              </Typography>
              <Typography color="text.secondary">
                {t('instead-of-manually-approximate')}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AutomatedDriving;
