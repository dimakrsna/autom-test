import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { LinkStyled, MenuItem, MenuWrapper } from './styles';
import { useTranslation } from 'next-i18next';

const SidebarNav = ({ pages, onClose }) => {
  const { t } = useTranslation('common');

  const onMenuClick = () => {
    onClose()
  }

  return (
    <Box>
      <Box
        display={'flex'}
        justifyContent={'flex-end'}

      >
        <IconButton onClick={onMenuClick}>
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>
      <Box paddingX={2} paddingBottom={2}>
        <Box>
          <Box marginBottom={4}>
            <Typography
              onClick={onMenuClick}
              variant="caption"
              sx={{
                fontWeight: 700,
                textTransform: 'uppercase',
                marginBottom: 1,
                display: 'block',
              }}
            >
              {t('menu')}
            </Typography>
            <Grid container spacing={1}>
              <MenuWrapper>
                <MenuItem onClick={onMenuClick}>
                  <LinkStyled href="/#hero">
                    {t('home')}
                  </LinkStyled>
                </MenuItem>
                <MenuItem onClick={onMenuClick}>
                  <LinkStyled href='/#automated-driving'>
                    {t('automated-driving')}
                  </LinkStyled>
                </MenuItem>
                <MenuItem onClick={onMenuClick}>
                  <LinkStyled href='/#from-air-to-trafic'>
                    {t('data-processing')}
                  </LinkStyled>
                </MenuItem>
                <MenuItem onClick={onMenuClick}>
                  <LinkStyled href='/#features'>
                    {t('features')}
                  </LinkStyled>
                </MenuItem>
                <MenuItem onClick={onMenuClick}>
                  <LinkStyled href='/#dataset'>
                    {t('dataset')}
                  </LinkStyled>
                </MenuItem>
                <MenuItem onClick={onMenuClick}>
                  <LinkStyled href='/#pricing'>
                    {t('pricing')}
                  </LinkStyled>
                </MenuItem>
                <MenuItem onClick={onMenuClick}>
                  <LinkStyled href='/#why-work-with-us'>
                    {t('why-work-with-us')}
                  </LinkStyled>
                </MenuItem>
                <MenuItem onClick={onMenuClick}>
                  <LinkStyled href='/#code-example'>
                    {t('code-example')}
                  </LinkStyled>
                </MenuItem>
                {/* <MenuItem onClick={onMenuClick}>
                  <LinkStyled href='/#reviews'>
                    {t('reviews')}
                  </LinkStyled>
                </MenuItem>
                <MenuItem onClick={onMenuClick}>
                  <LinkStyled href='/#partners'>
                    {t('partners')}
                  </LinkStyled>
                </MenuItem> */}
                <MenuItem onClick={onMenuClick}>
                  <LinkStyled href='/#headline'>
                    {t('contacts')}
                  </LinkStyled>
                </MenuItem>
              </MenuWrapper>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

SidebarNav.propTypes = {
  pages: PropTypes.array.isRequired,
  onClose: PropTypes.func,
};

export default SidebarNav;
