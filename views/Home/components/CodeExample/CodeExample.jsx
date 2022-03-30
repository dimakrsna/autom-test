import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { CopyBlock, Code, CodeBlock, monokaiSublime } from "react-code-blocks";
import { ALink, CodeBlockWrapper } from './styles';
import { useTranslation } from 'next-i18next';

const CodeExample = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const { t } = useTranslation('home');

  return (
    <Box>
      <Grid
        container
        spacing={4}
        flexDirection={isMd ? 'row' : 'column-reverse'}
        marginBottom={8}
      >
        <Grid item xs={12} md={4} container alignItems={'center'}>
          <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
            <Box marginBottom={2}>
              <Typography variant={'h5'} sx={{ fontWeight: 700 }} gutterBottom>
                {t('installation')}
              </Typography>
              <Typography color="text.secondary">
                {t('see-how-fast-you-install')}
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          container
          justifyContent={'center'}
          xs={12}
          md={8}
          width={'100%'}
        >
          <CodeBlockWrapper>
            <CopyBlock
              text={`import os from openautomatumdronedata.dataset 
import droneDataset

path_to_dataset_folder = os.path.abspath("datasets/highwayautumn-945ee2ff-4e82-407c-a15b-7161876b4248") 
dataset = droneDataset(path_to_dataset_folder)
dynWorld = dataset.dynWorld`}
              language={'python'}
              theme={monokaiSublime}
              codeBlock
            />
          </CodeBlockWrapper>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={4}
        flexDirection={isMd ? 'row' : 'column-reverse'}
      >
        <Grid item xs={12} md={4} container alignItems={'center'}>
          <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
            <Box marginBottom={2}>
              <Typography variant={'h5'} sx={{ fontWeight: 700 }} gutterBottom>
                {t('interaction-with-the-data')}
              </Typography>
              <Typography color="text.secondary" marginBottom={2}>
                {t('access-all-objects')}
              </Typography>
              <ALink href="https://openautomatumdronedata.readthedocs.io/en/latest/index.html" target="_blank">
                <Button
                  size={'large'}
                  variant={'contained'}>
                  {t('documentation')}
                </Button>
              </ALink>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          container
          justifyContent={'center'}
          xs={12}
          md={8}
          width={'100%'}
        >
          <CodeBlockWrapper>
            <CopyBlock
              text={`dynObjectList = dynWorld.get_list_of_dynamic_objects_for_specific_time(1.0) 
dynObject = dynObjectList[0]

print(dynObject.x_vec) 
print(dynObject.y_vec) 
print(dynObject.vx_vec) 
print(dynObject.vy_vec) 
print(dynObject.psi_vec) 
print(dynObject.ax_vec) 
print(dynObject.ay_vec) 
print(dynObject.length) 
print(dynObject.width) 
print(dynObject.time) 
print(dynObject.UUID) 
print(dynObject.delta_t)`}
              language={'python'}
              theme={monokaiSublime}
              codeBlock
            />
          </CodeBlockWrapper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CodeExample;
