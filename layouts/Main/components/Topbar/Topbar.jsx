import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ButtonStyled, LogoWrapper } from './styles';
import logo from '../../../../public/resources/logo/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Topbar = ({
  onSidebarOpen,
}) => {
  const router = useRouter();

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={'100%'}
    >
      <Box display={'flex'} alignItems={'center'}>
        <Box marginRight={{ xs: 1, sm: 2 }}>
          <IconButton onClick={onSidebarOpen} aria-label="Menu">
            <MenuIcon />
          </IconButton>
        </Box>
        <Box
          display={'flex'}
          alignItems="center"
        >
          <Link href="/">
            <LogoWrapper>
              <Image src={logo} />
            </LogoWrapper>
          </Link>
        </Box>
      </Box>
      <Box display="flex" alignItems={'center'}>
        <Box sx={{ display: { md: 'flex' } }} alignItems={'center'}>
          <Link href={router.asPath} locale={'en'}>
            <ButtonStyled
              variant="contained"
              color="primary"
              target="blank"
            >
              Eng
            </ButtonStyled>
          </Link>
          <Link href={router.asPath} locale={'de'}>
            <ButtonStyled
              variant="contained"
              color="primary"
              target="blank"
            >
              De
            </ButtonStyled>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  themeToggler: PropTypes.func.isRequired,
  themeMode: PropTypes.string.isRequired,
  setThemePalette: PropTypes.func.isRequired,
  paletteType: PropTypes.string.isRequired,
};

export default Topbar;
