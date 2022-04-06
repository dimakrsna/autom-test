/* eslint-disable react/no-unescaped-entities */
import React, { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { useFormik } from 'formik'; 
import * as yup from 'yup';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useTranslation } from 'next-i18next';
import emailjs from '@emailjs/browser';
import { ErrorMessage } from './styles';
import { CircularProgress } from '@mui/material';

const Form = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    datasetWhatFor: '',
    scenario: '',
    qualityAspects: '',
    anythingElse: '',
    isAllowToContact: false,
  };
  const { t } = useTranslation('get-free-dataset');
  const form = useRef();
  const [isRequested, setRequested] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const validationSchema = yup.object({
    email: yup
      .string(t('enter-email-error'))
      .trim()
      .email(t('valid-email-error'))
      .required('email-is-required'),
    message: yup
      .string()
      .trim()
      .max(500, t('message-cannot-contain-more')),
  });
  const router = useRouter();

  const onSubmit = (values, { resetForm }) => {
    setRequested(true)

    const request = emailjs.sendForm(
      process.env.EMAILJS_SERVICE_ID, 
      process.env.EMAILJS_TEMPLATE_ID_DATASET_FORM, 
      form.current, 
      process.env.EMAILJS_USER_ID
    )

    request.then(response => {
      if(response.status !== 200){
        setErrorMessage(response.text)
      } else {
        setErrorMessage('');
        resetForm();
        sessionStorage.setItem('automatumIsCanGetDataset', true)
        router.push('/download-dataset');
      }
      setRequested(false)
    }).catch(error => {
      setErrorMessage(error?.text)
      setRequested(false)
    })

    return values;
  };

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit,
  });

  return (
    <Box>
      <form onSubmit={formik.handleSubmit} ref={form}>
        <Box
          component={Grid}
          marginBottom={{ xs: 10, sm: 0 }}
          container
          spacing={4}
        >
          <Grid item xs={12} sm={6}>
            {/* <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
              {t('tell-us-your-first-name')}
            </Typography> */}
            <TextField
              label={t('first-name')}
              variant="outlined"
              name={'firstName'}
              fullWidth
              value={formik.values.firstName}
              onChange={formik.handleChange}
              error={
                formik.touched.firstName && Boolean(formik.errors.firstName)
              }
              helperText={formik.touched.firstName && formik.errors.firstName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            {/* <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
              {t('tell-us-your-last-name')}
            </Typography> */}
            <TextField
              label={t('last-name')}
              variant="outlined"
              name={'lastName'}
              fullWidth
              value={formik.values.lastName}
              onChange={formik.handleChange}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            {/* <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
              {t('your-email-address')}
            </Typography> */}
            <TextField
              label={t('email')}
              variant="outlined"
              name={'email'}
              fullWidth
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            {/* <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
              {t('enter-your-phone-number')}
            </Typography> */}
            <TextField
              label={t('phone-number')}
              variant="outlined"
              name={'phone'}
              fullWidth
              value={formik.values.phone}
              onChange={formik.handleChange}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            {/* <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
              {t('company-optional')}
            </Typography> */}
            <TextField
              label={t('company')}
              variant="outlined"
              name={'company'}
              fullWidth
              value={formik.values.company}
              onChange={formik.handleChange}
              error={formik.touched.company && Boolean(formik.errors.company)}
              helperText={formik.touched.company && formik.errors.company}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label={t('what-dataset-for')}
              variant="outlined"
              name={'datasetWhatFor'}
              fullWidth
              multiline
              rows={2}
              value={formik.values.datasetWhatFor}
              onChange={formik.handleChange}
              error={formik.touched.datasetWhatFor && Boolean(formik.errors.datasetWhatFor)}
              helperText={formik.touched.datasetWhatFor && formik.errors.datasetWhatFor}
            />
          </Grid>
          <Grid item xs={12}>
            {/* <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
              {t('what-kind-of-scenario')}
            </Typography> */}
            <TextField
              label={t('what-kind-of-scenario')}
              variant="outlined"
              name={'scenario'}
              fullWidth
              multiline
              rows={2}
              value={formik.values.scenario}
              onChange={formik.handleChange}
              error={formik.touched.scenario && Boolean(formik.errors.scenario)}
              helperText={formik.touched.scenario && formik.errors.scenario}
            />
          </Grid>
          <Grid item xs={12}>
            {/* <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
              {t('what-most-important-quality-aspects')}
            </Typography> */}
            <TextField
              label={t('what-most-important-quality-aspects')}
              variant="outlined"
              name={'qualityAspects'}
              fullWidth
              multiline
              rows={2}
              value={formik.values.qualityAspects}
              onChange={formik.handleChange}
              error={formik.touched.qualityAspects && Boolean(formik.errors.qualityAspects)}
              helperText={formik.touched.qualityAspects && formik.errors.qualityAspects}
            />
          </Grid>
          <Grid item xs={12}>
            {/* <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
              {t('anything-else')}
            </Typography> */}
            <TextField
              label={t('anything-else')}
              variant="outlined"
              name={'anythingElse'}
              fullWidth
              multiline
              rows={2}
              value={formik.values.anythingElse}
              onChange={formik.handleChange}
              error={formik.touched.anythingElse && Boolean(formik.errors.anythingElse)}
              helperText={formik.touched.anythingElse && formik.errors.anythingElse}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel control={
              <Checkbox value={formik.values.isAllowToContact} name={'isAllowToContact'} onChange={formik.handleChange}/>
            } label={t('allowed-to-contact-you')} />
          </Grid>
          <Grid
            item
            container
            xs={12}
            justifyContent={'center'}
            alignItems={'center'}
            flexDirection={'column'}
            mb={4}
          >
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
            <Button disabled={isRequested} size={'large'} variant={'contained'} type={'submit'}>
              {isRequested ?  <CircularProgress size={20} color="inherit" /> : t('submit-and-download')}
            </Button>
            <Typography
              variant={'subtitle2'}
              color={'textSecondary'}
              sx={{ marginTop: 2 }}
              align={'center'}
            >
              {t('get-back-to-you')}
            </Typography>
          </Grid>
        </Box>
      </form>
    </Box>
  );
};

export default Form;
