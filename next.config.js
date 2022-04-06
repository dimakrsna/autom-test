/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: false,
  i18n,
  env: {
    EMAILJS_SERVICE_ID: 'service_oih3105',
    EMAILJS_TEMPLATE_ID_CONTACTS_FORM: 'template_sd7xewy',
    EMAILJS_TEMPLATE_ID_DATASET_FORM: 'template_kuw78aj',
    EMAILJS_USER_ID: '_UBOPUjYaWRlX5-br'
  },
}

module.exports = nextConfig
