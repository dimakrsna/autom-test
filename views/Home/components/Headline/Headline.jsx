import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';

const Headline = () => {
  const { t } = useTranslation('home');
  return (
    <Box>
      <Box marginBottom={2}>
        <Typography
          variant="h2"
          align={'center'}
          sx={{
            fontWeight: 700,
          }}
        >
          {t('get-in-touch')}
        </Typography>
      </Box>
      <Box>
        <Typography variant="h6" align={'center'} color={'textSecondary'}>
          {t('we-help-big-ideas')}
        </Typography>
      </Box>
    </Box>
  );
};

export default Headline;
