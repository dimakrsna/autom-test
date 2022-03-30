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
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

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
      <Grid container spacing={4}>
        <Grid item xs={12} md={4} data-aos={'fade-up'}>
          <Box
            component={Card}
            display={'flex'}
            flexDirection={'column'}
            boxShadow={0}
            border={`1px solid ${theme.palette.divider}`}
            borderRadius={4}
          >
            <Box component={CardContent} padding={4}>
              <Box
                marginBottom={4}
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
              >
                <Typography variant={'h4'} gutterBottom>
                  <Box component={'span'} fontWeight={700}>
                    {t('free-dataset')}
                  </Box>
                </Typography>
                <Box display={'flex'} alignItems={'flex-start'}>
                  {renderNumbers(300, '+')}
                </Box>
                <Box>
                  <Typography variant={'h6'} gutterBottom>
                    <Box component={'span'} >
                      {t('driven-kilometres')}
                    </Box>
                  </Typography>
                </Box>
                <Box display={'flex'} alignItems={'flex-start'}>
                  {renderNumbers(300, '+')}
                </Box>
                <Box>
                  <Typography variant={'h6'} gutterBottom>
                    <Box component={'span'}>
                      {t('hours-of-recording')}
                    </Box>
                  </Typography>
                </Box>
                <Box display={'flex'} alignItems={'flex-start'}>
                  {renderNumbers(300, '+')}
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
            </Box>
            <Box flexGrow={1} />
            <Box
              component={CardActions}
              justifyContent={'center'}
              padding={3}
            >
              <Link href="/get-free-dataset">
                <Button
                  size={'large'}
                  startIcon={<ViewQuiltIcon />}
                  // variant={'outlined'}
                  variant={'contained'}
                  >
                    {t('download')}
                </Button>
              </Link>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={4} data-aos={'fade-up'}>
          <Box
            component={Card}
            display={'flex'}
            flexDirection={'column'}
            boxShadow={0}
            border={`1px solid ${theme.palette.divider}`}
            borderRadius={4}
          >
            <Box component={CardContent} padding={4}>
              <Box
                marginBottom={4}
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
              >
                <Typography variant={'h4'} gutterBottom>
                  <Box component={'span'} fontWeight={700}>
                    {t('highwaysn-ramps')}
                  </Box>
                </Typography>
                <Box display={'flex'} alignItems={'flex-start'}>
                  {renderNumbers(300, '+')}
                </Box>
                <Box>
                  <Typography variant={'h6'} gutterBottom>
                    <Box component={'span'}>
                      {t('driven-kilometres')}
                    </Box>
                  </Typography>
                </Box>
                <Box display={'flex'} alignItems={'flex-start'}>
                  {renderNumbers(300, '+')}
                </Box>
                <Box>
                  <Typography variant={'h6'} gutterBottom>
                    <Box component={'span'}>
                      {t('hours-of-recording')}
                    </Box>
                  </Typography>
                </Box>
                <Box display={'flex'} alignItems={'flex-start'}>
                  {renderNumbers(300, '+')}
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
            </Box>
            <Box flexGrow={1} />
            <Box
              component={CardActions}
              justifyContent={'center'}
              padding={3}
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
        </Grid>
        <Grid item xs={12} md={4} data-aos={'fade-up'}>
          <Box
            component={Card}
            display={'flex'}
            flexDirection={'column'}
            boxShadow={0}
            border={`1px solid ${theme.palette.divider}`}
            borderRadius={4}
          >
            <Box component={CardContent} padding={4}>
              <Box
                marginBottom={4}
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
              >
                <Typography variant={'h4'} gutterBottom>
                  <Box component={'span'} fontWeight={700}>
                    {t('highway-alks')}
                  </Box>
                </Typography>
                <Box display={'flex'} alignItems={'flex-start'}>
                  {renderNumbers(300, '+')}
                </Box>
                <Box>
                  <Typography variant={'h6'} gutterBottom>
                    <Box component={'span'} >
                      {t('driven-kilometres')}
                    </Box>
                  </Typography>
                </Box>
                <Box display={'flex'} alignItems={'flex-start'}>
                  <Typography variant="h4" gutterBottom>
                    <Box fontWeight={600}>
                      <VisibilitySensor
                        onChange={(isVisible) => setViewPortVisibility(isVisible)}
                        delayedCall
                      >
                        <CountUp
                          redraw={false}
                          end={300}
                          start={0}
                          suffix="+"
                        />
                      </VisibilitySensor>
                    </Box>
                  </Typography>
                </Box>
                <Box>
                  <Typography variant={'h6'} gutterBottom>
                    <Box component={'span'}>
                    {t('hours-of-recording')}
                    </Box>
                  </Typography>
                </Box>
                <Box display={'flex'} alignItems={'flex-start'}>
                  {renderNumbers(300, '+')}
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
            </Box>
            <Box flexGrow={1} />
            <Box
              component={CardActions}
              justifyContent={'center'}
              padding={3}
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
        </Grid>
      </Grid>
    </Box>
  );
};

export default Pricing;
