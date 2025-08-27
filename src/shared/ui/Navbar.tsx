import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='bg-black shadow p-4 flex gap-6'>
      <Link href='/' className='text-white font-semibold hover:underline'>
        Home
      </Link>
      <Link href='/about' className='text-white font-semibold hover:underline'>
        About
      </Link>
      <Link
        href='/contact'
        className='text-white font-semibold hover:underline'
      >
        Contact
      </Link>
    </nav>
  );
}
