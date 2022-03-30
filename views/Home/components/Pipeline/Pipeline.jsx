import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Image } from './styles';

const Pipeline = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Grid
        container
        spacing={4}
        flexDirection={isMd ? 'row' : 'column-reverse'}
      >
        <Grid
          item
          container
          justifyContent={'center'}
          xs={12}
          md={6}
          width={'100%'}
        >
          <Box height={'100%'} width={'100%'} maxWidth={600}>
            <Image src="https://dummyimage.com/640x360/ccc/aaa" alt="img" />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} container alignItems={'center'}>
          <Box data-aos={isMd ? 'fade-left' : 'fade-up'}>
            <Box marginBottom={2}>
              <Typography variant={'h4'} sx={{ fontWeight: 700 }} gutterBottom>
                Pipeline scalability to the cluster
              </Typography>
              <Box container spacing={1} mb={5}>
                {[
                  "Cloud independent and fully automated release process",
                  "Continuous integration (Jenkins)",
                  "Automatic Docker roll out, CPU and GPU",
                  "Recalculation and updating existing Datasets with one click",
                  "Database application (Marvin) to maintain workflow",
                  "Continuously improving data",
                ].map((item, i) => (
                  <Box item xs={12} sm={6} key={i}>
                    <Box
                      component={ListItem}
                      disableGutters
                      width={'auto'}
                      padding={0}
                    >
                      <Box
                        component={ListItemAvatar}
                        minWidth={'auto !important'}
                        marginRight={2}
                      >
                        <Box
                          component={Avatar}
                          bgcolor={theme.palette.secondary.main}
                          width={20}
                          height={20}
                        >
                          <svg
                            width={12}
                            height={12}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </Box>
                      </Box>
                      <ListItemText primary={item} />
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Pipeline;
