import Head from 'next/head';
import Navbar from './Navbar';


export default function Layout({
    children,
    name = 'Nearby Maps',
}) {
    const year = new Date().getFullYear();
    return (<>
        <Head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />

            <title>{name}</title>
        </Head>

        <header>
            <Navbar />
        </header>

        {children}

        <footer>
            <hr />
            <p>
                {`© ${year} ${name} | Created by `}
                <a href="https://github.com/thhuang" target="_blank">thhuang</a>
            </p>
        </footer>
    </>);
};
