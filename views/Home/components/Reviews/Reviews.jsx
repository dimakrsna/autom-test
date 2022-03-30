import React from 'react';
import Slider from 'react-slick';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { useTranslation } from 'next-i18next';


const Reviews = () => {
  const sliderOpts = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  const { t } = useTranslation('home');

  return (
    <Box> 
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'secondary'}
          align={'center'}
        >
          {t('reviews')}
        </Typography>
        <Box
          component={Typography}
          fontWeight={700}
          variant={'h3'}
          align={'center'}
          gutterBottom
        >
          {t('what-our-partners-think')}
          What our partners think
        </Box>
        <Typography
          variant={'h6'}
          component={'p'}
          color={'textSecondary'}
          align={'center'}
        >
          {t('loved-by-business')}
        </Typography>
      </Box>
      <Box maxWidth={600} margin={'0 auto'}>
        <Slider {...sliderOpts}>
          {[
            {
              feedback: t('working-with-materialist'),
              image: 'https://assets.maccarianagency.com/avatars/img1.jpg',
              name: 'Clara Bertoletti',
              title: t('material-ui-lover'),
            },
          ].map((item, i) => (
            <Box key={i}>
              <Box
                component={Typography}
                variant={'h6'}
                fontWeight={400}
                align={'center'}
                gutterBottom
              >
                {item.feedback}
              </Box>
              <Box
                component={'ul'}
                display={'flex'}
                justifyContent={'center'}
                width={'100%'}
              >
                <Box component={ListItem} disableGutters width={'auto'}>
                  <ListItemAvatar>
                    <Avatar src={item.image} />
                  </ListItemAvatar>
                  <ListItemText primary={item.name} secondary={item.title} />
                </Box>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default Reviews;
