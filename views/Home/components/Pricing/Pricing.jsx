import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import VisibilitySensor from 'react-visibility-sensor';
import CountUp from 'react-countup';
import { LocationItem, LocationList } from './styles';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { ImageStyled } from './styles';
import highway_open_img from '../../../../public/images/datasets/opensource.svg';
import highway_ramp_img from '../../../../public/images/datasets/ramps.svg';
import highway_alks_img from '../../../../public/images/datasets/alks.svg';
import BackupIcon from '@mui/icons-material/Backup';
import CloudDoneIcon from '@mui/icons-material/CloudDone';

const Pricing = () => {
  const theme = useTheme();
  const { t } = useTranslation('home');

  const [viewPortEntered, setViewPortEntered] = useState(false);
  const setViewPortVisibility = (isVisible) => {
    if (viewPortEntered) {
      return;
    }

    setViewPortEntered(isVisible);
  };

  const renderNumbers = (value, suffix) => (
    <Typography variant="h4" gutterBottom>
      <Box fontWeight={600}>
        <VisibilitySensor
          onChange={(isVisible) => setViewPortVisibility(isVisible)}
          delayedCall
        >
          <CountUp
            redraw={false}
            end={viewPortEntered ? value : 0}
            start={0}
            suffix={suffix}
          />
        </VisibilitySensor>
      </Box>
    </Typography>
  )

  return (
    <Box>
      <Grid container
        direction="row"
        justifyContent="space-between"
        alignItems="stretch" spacing={4}>
        <Grid item data-aos={'fade-up'} style={{ display: 'flex' }} >
          <Box
            component={Card}
            display={'flex'}
            flexDirection={'column'}
            boxShadow={0}
            border={`1px solid ${theme.palette.divider}`}
            borderRadius={4}
            justifyContent={"space-between"}
          >
            <Box component={CardContent} padding={4}
              marginBottom={1}
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}
            >
              <Typography variant={'h4'} gutterBottom>
                <Box component={'span'} fontWeight={700}>
                  {t('free-dataset')}
                </Box>
              </Typography>
              <ImageStyled loading="lazy" src={highway_open_img} alt="open_data_ex_img" />
              <Box>
                <Typography variant={'h6'} gutterBottom>
                  <Box component={'span'} >
                    {t('driven-kilometres')}
                  </Box>
                </Typography>
              </Box>
              <Box display={'flex'} alignItems={'flex-start'}>
                {renderNumbers(30134, '')}
              </Box>
              <Box>
                <Typography variant={'h6'} gutterBottom>
                  <Box component={'span'}>
                    {t('hours-of-recording')}
                  </Box>
                </Typography>
              </Box>
              <Box display={'flex'} alignItems={'flex-start'}>
                {renderNumbers(30.3, '')}
              </Box>

              <Box>
                <Typography variant={'h6'} gutterBottom>
                  <Box component={'div'} >
                    {t('locations')}
                    <LocationList>
                      <LocationItem>
                        {t('german-highway')}
                      </LocationItem>
                      <LocationItem>
                        {t('free-floating-trafic')}
                      </LocationItem>
                      <LocationItem>
                        {t('completely-free')}
                      </LocationItem>
                    </LocationList>
                  </Box>
                </Typography>
              </Box>

            </Box>
            <Box component={CardActions}
              padding={1}
              display={'flex-end'}
              flexDirection={'column'}>
              <Box>
                <Grid container spacing={1} container direction="row" alignItems="center">
                  <Grid item color={theme.palette.primary.main} bgcolor={theme.palette.background.paper}>
                    <CloudDoneIcon />
                  </Grid>
                  <Grid item>
                    {t('status_done')}
                  </Grid>
                </Grid>
              </Box>
              <Box
                justifyContent={'center'}
                padding={1}
              >
                <Link href="/get-free-dataset">
                  <Button
                    size={'large'}
                    startIcon={<CloudDownloadIcon />}
                    // variant={'outlined'}
                    variant={'contained'}
                  >
                    {t('download')}
                  </Button>
                </Link>
              </Box>
            </Box>

          </Box>
        </Grid>
        <Grid item data-aos={'fade-up'}  style={{ display: 'flex' }} >
          <Box
            component={Card}
            display={'flex'}
            flexDirection={'column'}
            boxShadow={0}
            border={`1px solid ${theme.palette.divider}`}
            borderRadius={4}
            justifyContent={"space-between"}

          >
            <Box component={CardContent} padding={4}
              marginBottom={1}
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}
            >
              <Typography variant={'h4'} gutterBottom>
                <Box component={'span'} fontWeight={700}>
                  {t('highwaysn-ramps')}
                </Box>
              </Typography>
              <Box>
                <ImageStyled loading="lazy" src={highway_ramp_img} alt="ramp_ex_img" />
              </Box>
              <Box>
                <Typography variant={'h6'} gutterBottom>
                  <Box component={'span'}>
                    {t('driven-kilometres')}
                  </Box>
                </Typography>
              </Box>
              <Box display={'flex'} alignItems={'flex-start'}>
                {renderNumbers(11000, '+')}
              </Box>
              <Box>
                <Typography variant={'h6'} gutterBottom>
                  <Box component={'span'}>
                    {t('hours-of-recording')}
                  </Box>
                </Typography>
              </Box>
              <Box display={'flex'} alignItems={'flex-start'}>
                {renderNumbers(15, '+')}
              </Box>
              <Box>
                <Typography variant={'h6'} gutterBottom>
                  <Box component={'div'}>
                    {t('locations')}
                    <LocationList>
                      <LocationItem>
                        {t('highway-ramps')}
                      </LocationItem>
                      <LocationItem>
                        {t('traffic-jam')}
                      </LocationItem>
                      <LocationItem>
                        {t('construction-site')}
                      </LocationItem>
                    </LocationList>
                  </Box>
                </Typography>
              </Box>

            </Box>
            <Box
              component={CardActions}
              padding={1}
              display={'flex'}
              alignItems={'center'}
              flexDirection={'column'}>

              <Box>
                <Grid container spacing={1} container direction="row" alignItems="center">
                  <Grid item color={theme.palette.primary.main} bgcolor={theme.palette.background.paper}>
                    <BackupIcon />
                  </Grid>
                  <Grid item>
                    {t('status_extending')}
                  </Grid>
                </Grid>
              </Box>
              <Box
                justifyContent={'center'}
                padding={1}
              >
                <Link href="/#headline">
                  <Button
                    size={'large'}
                    variant={'outlined'}
                  >
                    {t('contact-us')}
                  </Button>
                </Link>
              </Box>
            </Box>
          </Box>
        </Grid>


        <Grid item data-aos={'fade-up'}   style={{ display: 'flex' }}>
          <Box
            component={Card}
            display={'flex'}
            flexDirection={'column'}
            boxShadow={0}
            
            border={`1px solid ${theme.palette.divider}`}
            borderRadius={4}
            justifyContent={"space-between"}
            xs={4}
          >
            <Box component={CardContent} padding={4}
              marginBottom={1}
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}
            >
              <Typography variant={'h4'} gutterBottom>
                <Box component={'span'} fontWeight={700}>
                  {t('highway-alks')}
                </Box>
              </Typography>
              <ImageStyled loading="lazy" src={highway_alks_img} alt="alks_ex_img" />
              <Box>
                <Typography variant={'h6'} gutterBottom>
                  <Box component={'span'} >
                    {t('driven-kilometres')}
                  </Box>
                </Typography>
              </Box>
              <Box display={'flex'} alignItems={'flex-start'}>
                {renderNumbers(3000, '+')}
              </Box>
              <Box>
                <Typography variant={'h6'} gutterBottom>
                  <Box component={'span'}>
                    {t('hours-of-recording')}
                  </Box>
                </Typography>
              </Box>
              <Box display={'flex'} alignItems={'flex-start'}>
                {renderNumbers(8, '+')}
              </Box>

              <Box>
                <Typography variant={'h6'} gutterBottom>
                  <Box component={'div'} >
                    {t('locations')}
                    <LocationList>
                      <LocationItem>
                        {t('no-construction-sites')}
                      </LocationItem>
                      <LocationItem>
                        {t('velocity')}
                      </LocationItem>
                      <LocationItem>
                        {t('including-ramps')}
                      </LocationItem>
                    </LocationList>
                  </Box>
                </Typography>
              </Box>


            </Box>
            <Box
              component={CardActions}
              padding={1}
              display={'flex'}
              alignItems={'center'}
              flexDirection={'column'}>
              <Box>
                <Grid container spacing={1} container direction="row" alignItems="center">
                  <Grid item color={theme.palette.primary.main} bgcolor={theme.palette.background.paper}>
                    <BackupIcon />
                  </Grid>
                  <Grid item>
                    {t('status_extending')}
                  </Grid>
                </Grid>
              </Box>
              <Box
                component={CardActions}
                justifyContent={'center'}
                padding={1}
              >
                <Link href="/#headline">
                  <Button
                    size={'large'}
                    variant={'outlined'}
                  >
                    {t('contact-us')}
                  </Button>
                </Link>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Pricing;
