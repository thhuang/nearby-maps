import Image from 'next/image';
import logo from '../public/logo.svg';

export default function Navbar() {
    return (<>
        <nav>
            <a>
                <Image
                    src={logo}
                    alt="Picture of the author"
                    width={30}
                    height={30}
                />
            </a>
        </nav>
    </>);
};
