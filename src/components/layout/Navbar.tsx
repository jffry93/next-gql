import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <div className='logo'>
        <Image src='/favicon.ico' width={80} height={80} alt='logo' />
      </div>
      <Link href='/'>Home</Link>
      <Link href='/about'>About</Link>
      <Link href='/movies'>Movies</Link>
    </nav>
  );
};

export default Navbar;