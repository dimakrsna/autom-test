import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';

const Headline = () => {
  const { t } = useTranslation('get-free-dataset');

  return (
    <Box>
      {/* <Typography
        sx={{
          textTransform: 'uppercase',
          fontWeight: 'medium',
        }}
        gutterBottom
        color={'textSecondary'}
        align={'center'}
      >
        Hire us
      </Typography> */}
      <Box marginBottom={2}>
        <Typography
          variant="h2"
          align={'center'}
          sx={{
            fontWeight: 700,
          }}
        >
          {t('get-the-complete-dataset')}
        </Typography>
      </Box>
      <Box>
        <Typography variant="h6" align={'center'} color={'textSecondary'}>
          {t('please-give-us-some-hints')}
        </Typography>
      </Box>
    </Box>
  );
};

export default Headline;
