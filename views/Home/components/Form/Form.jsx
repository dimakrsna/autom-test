/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';

const validationSchema = yup.object({
  firstName: yup
    .string('Enter your first name')
    .trim()
    .min(2, 'Please enter a valid name')
    .max(50, 'Please enter a valid name')
    .required('Please specify your first name'),
  lastName: yup
    .string('Enter your last name')
    .trim()
    .min(2, 'Please enter a valid name')
    .max(50, 'Please enter a valid name')
    .required('Please specify your last name'),
  email: yup
    .string('Enter your email')
    .trim()
    .email('Please enter a valid email address')
    .required('Email is required.'),
  phone: yup
    .string()
    .trim()
    .matches(
      /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)$/,
      'Please enter a valid phone number.',
    ),
  message: yup
    .string()
    .trim()
    .max(500, 'The message cannot contain more than 500 characters'),
});

const Form = () => {
  const { t } = useTranslation('home');

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    budget: '',
    message: '',
  };

  const onSubmit = (values) => {
    // send request here
    return values;
  };

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit,
  });

  return (
    <Box>
      <form onSubmit={formik.handleSubmit}>
        <Box
          component={Grid}
          marginBottom={{ xs: 10, sm: 0 }}
          container
          spacing={4}
        >
          <Grid item xs={12} sm={6}>
            <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
              {t('tell-us-your-first-name')}
            </Typography>
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
            <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
              {t('tell-us-your-last-name')}
            </Typography>
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
            <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
              {t('your-email-address')}
            </Typography>
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
            <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
              {t('enter-your-phone-number')}
            </Typography>
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
          <Grid item xs={12}>
            <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
              {t('about-your-project')}
            </Typography>
            <TextField
              label={t('message')}
              variant="outlined"
              name={'message'}
              fullWidth
              multiline
              rows={4}
              value={formik.values.message}
              onChange={formik.handleChange}
              error={formik.touched.message && Boolean(formik.errors.message)}
              helperText={formik.touched.message && formik.errors.message}
            />
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
            <Button size={'large'} variant={'contained'} type={'submit'}>
              {t('send-request')}
            </Button>
            <Typography
              variant={'subtitle2'}
              color={'textSecondary'}
              sx={{ marginTop: 2 }}
              align={'center'}
              >
              {t('well-get-back-to-you')}
            </Typography>
          </Grid>
        </Box>
      </form>
    </Box>
  );
};

export default Form;
