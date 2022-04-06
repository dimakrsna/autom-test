/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import SatelliteAltIcon from '@mui/icons-material/SatelliteAlt';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import { useTranslation } from 'next-i18next'; 

const Features = () => {
  const theme = useTheme();
  const { t } = useTranslation('home');

  return (
    <Box>
      <Box marginBottom={4}>
        <Box
          component={Typography}
          fontWeight={700}
          variant={'h3'}
          gutterBottom
          align={'center'}
        >
          {t('our-traffic-reports')}
        </Box>
      </Box>
      <Box>
        <Grid container spacing={4}>
          {[
            {
              title: t('datasets'),
              subtitle: t('we-provide-fixed-datasets'),
              icon: (
                <ViewQuiltIcon
                height={24}
                width={24}
                />
              ),
            },
            {
              title: t('data-as-a-service'),
              subtitle: t('you-know-your-requirements'),
              icon: (
                <SatelliteAltIcon
                  height={24}
                  width={24}
                />
              ),
            },
            {
              title: t('data-utility'),
              subtitle: t('all-datasets-come-with-a-rich-utility'),
              icon: (
                <PrecisionManufacturingIcon
                  height={24}
                  width={24}
                  />
              ),
            },
          ].map((item, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Box
                component={Card}
                padding={4}
                borderRadius={4}
                width={'100%'}
                height={'100%'}
                data-aos={'fade-up'}
              >
                <Box display={'flex'} flexDirection={'column'}>
                  <Box
                    component={Avatar}
                    width={50}
                    height={50}
                    marginBottom={2}
                    bgcolor={theme.palette.primary.main}
                    color={theme.palette.background.paper}
                  >
                    {item.icon}
                  </Box>
                  <Box
                    component={Typography}
                    variant={'h4'}
                    gutterBottom
                    sx={{ fontWeight: 500 }}
                  >
                    {item.title}
                  </Box>
                  <Typography color="text.secondary">
                    {item.subtitle}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Features;
