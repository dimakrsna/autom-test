/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: false,
  i18n,
  env: {
    EMAILJS_SERVICE_ID: 'service_boi1hki',
    EMAILJS_TEMPLATE_ID_CONTACTS_FORM: 'template_n8s65n1',
    EMAILJS_TEMPLATE_ID_DATASET_FORM: 'template_76zwj1r',
    EMAILJS_USER_ID: '-ObtroasemqXb6HUV',
  },
}

module.exports = nextConfig
