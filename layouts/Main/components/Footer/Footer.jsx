import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import logo from '../../../../public/resources/logo/logo.png';
import Link from 'next/link';
import Image from 'next/image';
import { LogoWrapper } from './styles';
import { useTranslation } from 'next-i18next';

const Footer = () => {
  const { t } = useTranslation('common');

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          width={'100%'}
          flexDirection={{ xs: 'column', sm: 'row' }}
        >
          <Link href="/">
            <LogoWrapper>
              <Image src={logo} />
            </LogoWrapper>
          </Link>
          <Box display="flex" flexWrap={'wrap'} alignItems={'center'}>
            <Box marginTop={1} marginRight={2}>
              <Link
                underline="none"
                component="a"
                href="/#headline"
                color="textPrimary"
                variant={'subtitle2'}
              >
                {t('contact')}
              </Link>
            </Box>
            <Box marginTop={1} marginRight={2}>
              <Link
                underline="none"
                component="a"
                href="/impressum"
                color="textPrimary"
                variant={'subtitle2'}
              >
                {t('impressum')}
              </Link>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography
          align={'center'}
          variant={'subtitle2'}
          color="textSecondary"
          gutterBottom
        >
          &copy; {t('all-rights-reserved', { year: new Date().getFullYear() })}
        </Typography>
        {/* <Typography
        align={'center'}
        variant={'caption'}
        color="textSecondary"
        component={'p'}
      >
        When you visit or interact with our sites, services or tools, we or our
        authorised service providers may use cookies for storing information to
        help provide you with a better, faster and safer experience and for
        marketing purposes.
      </Typography> */}
      </Grid>
    </Grid>
  )
};

export default Footer;
