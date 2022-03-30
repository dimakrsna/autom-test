import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useTranslation } from 'next-i18next';

const Content = () => {
  const { t } = useTranslation('download-dataset');

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant={'h6'}
          marginBottom={2}
          align={'center'}
          sx={{ fontWeight: 'medium', }}>
          {t('we-are-very-happy')}
        </Typography>
        <Typography
          variant={'h6'}
          gutterBottom
          align={'center'}
          sx={{ fontWeight: 'medium', }}>
          <Button size={'large'} variant={'contained'} type={'submit'}>{t('download')}</Button>
        </Typography>
      </Box>
      <Box marginBottom={4}>
        <Typography component={'p'} color={'textSecondary'}>
          {t('we-hope-that-this-will-support')}
        </Typography>
      </Box>
      <Box marginBottom={4}>
        <Typography component={'p'} color={'textSecondary'}>
          {t('at-this-point')}
        </Typography>
      </Box>
    </Box>
  );
};

export default Content;
