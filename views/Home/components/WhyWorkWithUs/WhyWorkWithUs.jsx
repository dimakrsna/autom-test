import React from 'react';
import Typed from 'react-typed';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import { colors } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import { ALink, CodeStyled } from './styles';
import { useTranslation } from 'next-i18next';


const WhyWorkWithUs = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const { t } = useTranslation('home');

  return (
    <Box>
      <Box position="relative" zIndex={2}>
        <Box marginBottom={2}>
          <Typography
            variant={'h3'}
            align={'center'}
            sx={{
              fontWeight: 700,
            }}
          >
            {t('open-automatum-processing-utility')}
          </Typography>
        </Box>
        <Box marginBottom={4}>
          <Typography variant="h6" align={'center'} color={'textSecondary'}>
            {t('to-make-the-work-with-our-data')} <br/>
            {t('get-our-free-python')}
          </Typography>
        </Box>
        <Box
          marginBottom={{ xs: 4, sm: 6, md: 8 }}
          display="flex"
          flexDirection={{ xs: 'column', sm: 'row' }}
          justifyContent={'center'}
          alignItems={{ xs: 'stretched', sm: 'center' }}
        >
          <ALink href="https://bitbucket.org/automatum/open.automatum.dronedata/src/master/" target="_blank">
            <Box
              component={Button}
              variant="contained"
              color="primary"
              size="large"
              fullWidth={!isMd}
              startIcon={<CodeIcon />}
            >
              {t('get-the-utility')}
            </Box>
          </ALink>
        </Box>
        <Box
          component={Card}
          bgcolor={colors.blueGrey[800]}
          padding={4}
          maxWidth={600}
          margin={'0 auto'} 
          boxShadow={3}
        >
          {/* <Typography color={theme.palette.common.white}> */}
          <CodeStyled color={theme.palette.common.white}>
            {'~$ > '}
            <Typed
              strings={['pip install openautomatumdronedata']}
              typeSpeed={70}
              loop={true}
            />
          </CodeStyled>
        </Box>
      </Box>
    </Box>
  );
};

export default WhyWorkWithUs;
