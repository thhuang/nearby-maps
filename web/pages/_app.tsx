import Layout from '../components/Layout';
import './globals.scss';

export default function App({ Component, pageProps }) {
    return (<>
        <Layout name="咖啡廳地圖"> {/* I18N_CAFE_LANDING_TITLE */}
            <Component {...pageProps} />
        </Layout>
    </>);
};
