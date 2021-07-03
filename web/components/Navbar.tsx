import Image from 'next/image';
import logo from '../public/logo.svg';

export default function Navbar() {
    return (<>
        <nav>
            <a><Image src={logo} alt="" width={36} height={36} /></a>
        </nav>
    </>);
};
