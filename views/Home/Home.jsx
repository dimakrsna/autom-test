import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '../../common/Container';
import {
  Features,
  Hero,
  AutomatedDriving,
  FromAirToTrafic,
  DataProcessing,
  Pipeline,
  AutomatedExport,
  Pricing,
  WhyWorkWithUs,
  CodeExample,
  Reviews,
  Headline,
  Form,
  Partners,
  Dataset,
} from './components';

const Home = () => {
  const theme = useTheme();
  return (
    <Box> 
      <Box bgcolor={theme.palette.alternate.main} position={'relative'}>
        <Container position="relative" zIndex={2} id="hero">
          <Hero />
        </Container>
      </Box>
      <Container id="automated-driving">
        <AutomatedDriving  />
      </Container>
      <Container id="from-air-to-trafic">
        <FromAirToTrafic  />
      </Container>
      {/* <Container id="DataProcessing">
        <DataProcessing />
      </Container> */}
      {/* <Container id="Pipeline">
        <Pipeline />
      </Container> */}
      {/* <Container id="AutomatedExport">
        <AutomatedExport />
      </Container>   */}
      <Container id="features">
        <Features />
      </Container>
      <Container id="dataset">
        <Dataset />
      </Container>
      <Container id="pricing">
        <Pricing />
      </Container>
      <Container id="why-work-with-us">
        <WhyWorkWithUs />
      </Container>
      <Container id="code-example">
        <CodeExample />
      </Container>
      {/* <Container id="reviews">
        <Reviews />
      </Container> */}
      {/* <Box bgcolor={theme.palette.alternate.main}>
        <Container id="partners">
          <Partners />
        </Container>
      </Box> */}
      <Box
        sx={{
          backgroundColor: theme.palette.alternate.main,
          backgroundImage: `linear-gradient(120deg, ${theme.palette.background.paper} 0%, ${theme.palette.alternate.main} 100%)`,
        }}
      >
        <Container id="headline">
          <Headline />
        </Container>
      </Box>
      <Container maxWidth={800} paddingBottom={'0 !important'} id="form">
        <Form />
      </Container>
    </Box>
  );
};

export default Home;
