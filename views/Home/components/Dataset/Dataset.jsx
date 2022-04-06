import React from 'react';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import FilePresentIcon from '@mui/icons-material/FilePresent';
import { useTranslation } from 'next-i18next';

import CheckIcon from '@mui/icons-material/Check';

const Dataset = () => {
  const theme = useTheme();
  const { t } = useTranslation('home');

  return (
    <Box>
      <Box marginBottom={6}>
        <Box
          component={Typography}
          fontWeight={700}
          variant={'h3'}
          align={'center'}
          gutterBottom
        >
          {t('automatum-datasets')}
        </Box>
      </Box>
      <Box component={Card} boxShadow={4} data-aos={'fade-up'}>
        <Box component={CardContent} padding={{ sm: 4 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <Box marginBottom={4}>
                <Typography fontWeight={600} variant={'h6'} gutterBottom>
                  {t('data-formats')}
                </Typography>
                <Typography>
                  {t('all-datasets-are-delivered')}
                </Typography>
              </Box>
              <Grid container spacing={1}>
                {[
                  t('static-world'),
                  t('dynamic-world'),
                  t('compatible-with-ipg'),
                ].map((item, i) => (
                  <Grid item xs={12} sm={12} key={i}>
                    <Box
                      component={ListItem}
                      disableGutters
                      width={'auto'}
                      padding={0}
                    >
                      <Box
                        component={ListItemAvatar}
                        minWidth={'auto !important'}
                        marginRight={2}
                      >
                        <Box
                          component={Avatar}
                          color={theme.palette.primary.main}
                          bgcolor={theme.palette.background.paper}
                          width={20}
                          height={20}
                        >
                          <CheckIcon/>
                          
                        </Box>
                      </Box>
                      <ListItemText primary={item} />
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box
                width={'100%'}
                height={'100%'}
                borderLeft={{ xs: 0, sm: `1px solid ${theme.palette.divider}` }}
                paddingLeft={{ xs: 0, sm: 4 }}
                paddingTop={{ xs: 4, sm: 0 }}
                borderTop={{ xs: `1px solid ${theme.palette.divider}`, sm: 0 }}
              >
                <Box marginBottom={4}>
                  <Box
                    component={Typography}
                    fontWeight={600}
                    variant={'h6'}
                    gutterBottom
                  >
                    {t('data-quality')}
                  </Box>
                  <Typography marginBottom={2}>
                    {t('our-datasets-maintain-the-highest-quality')}
                  </Typography>
                  <Grid container spacing={1}>
                {[
                  `${t('cross-correlation-of-vehicle-velocity')}: 99.983 % `,
                  `${t('cross-correlation-of-vehicle-acceleration')}: 96.958 % `,
                ].map((item, i) => (
                  <Grid item xs={12} sm={12} key={i}>
                    <Box
                      component={ListItem}
                      disableGutters
                      width={'auto'}
                      padding={0}
                    >
                      <Box
                        component={ListItemAvatar}
                        minWidth={'auto !important'}
                        marginRight={2}
                      >
                        <Box
                          component={Avatar}
                          color={theme.palette.primary.main}
                          bgcolor={theme.palette.background.paper}
                          width={20}
                          height={20}
                        >
                          <CheckIcon/>
                        </Box>
                      </Box>
                      <ListItemText primary={item} />
                    </Box>
                  </Grid>
                ))}
              </Grid>
                <Typography marginTop={2}>
                  {t('the-dataset-and-validation-was-peer-reviewed')}
                </Typography>
                </Box>
                <Button size={'large'} variant={'contained'} startIcon={<FilePresentIcon/>}>
                  {t('get-the-paper')}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Dataset;
