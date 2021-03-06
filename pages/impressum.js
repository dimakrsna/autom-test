import Head from 'next/head';
import Impressum from '../views/Impressum';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function ImpressumPage() {
  return (
    <>
      <Head>
        <title>Automatum | Impressum</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Impressum />
    </>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'impressum'])), 
    },
  };
}