import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';

const Headline = () => {
  const { t } = useTranslation('download-dataset');

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
          {t('thank-you-for-downloading')}
        </Typography>
      </Box>
    </Box>
  );
};

export default Headline;
