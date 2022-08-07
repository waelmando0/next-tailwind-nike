import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
	return (
		<Link href='/'>
			<a className='text-xl font-bold'>amazon</a>
		</Link>
	);
};

export default Logo;