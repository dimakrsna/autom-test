import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import { Email } from './styles';
import { useTranslation } from 'next-i18next';


const ContactCard = () => {
  const theme = useTheme();
  const { t } = useTranslation('impressum');

  return (
    <Box
      component={Card}
      boxShadow={0}
      border={{
        xs: 0,
        md: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Box
        paddingX={{ xs: 0, md: 3 }}
        paddingTop={3}
        paddingBottom={{ xs: 0, md: 3 }}
      >
        <Typography
          sx={{
            fontWeight: '700',
          }}
          gutterBottom
        >
          Angaben gemäß § 5 TMG
        </Typography>
        <Typography
          variant={'body2'}
          color={'textSecondary'}
          sx={{
            marginBottom: 2,
          }}
        >
          Kilian Lenz Industriestr. 11 96317 Kronach 
        </Typography>
        <Typography
          sx={{
            fontWeight: '700',
          }}
          gutterBottom
        >
          Kontakt
        </Typography>
        <Typography variant={'subtitle2'} mb={2}>
          Telefon.: 01577/2361566 <br/>
          <Email href="mailto:contact@automatum-data.com ">contact@automatum-data.com </Email>
        </Typography>
        
        <Typography
          sx={{
            fontWeight: '700',
          }}
          gutterBottom
        >
          Umsatzsteuer-ID 
        </Typography>
        <Typography variant={'subtitle2'} mb={1}>
          Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: DE322547165
        </Typography>
        <Typography variant={'subtitle2'} mb={1}>
          Quelle: <a href="https://www.e-recht24.de/impressum-generator.html" target="_blank">https://www.e-recht24.de/impressum-generator.html</a> 
        </Typography>
      </Box>
    </Box>
  );
};

export default ContactCard;
