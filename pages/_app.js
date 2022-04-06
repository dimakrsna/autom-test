import { appWithTranslation } from 'next-i18next'
import { MainLayout } from '../layouts'
import WithLayout from './../WithLayout'
import ClientOnly from './../ClientOnly'
import { NotificationContainer } from 'react-notifications';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';
import '../styles/globals.css';
import 'react-notifications/lib/notifications.css';

function MyApp({ Component, pageProps }) {
  return (
    <ClientOnly>
      <WithLayout 
        pageProps={pageProps}
        component={Component}
        layout={MainLayout}
      />
      <NotificationContainer/>
    </ClientOnly>
  )
}

export default appWithTranslation(MyApp)
