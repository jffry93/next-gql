// This approach seems to only work with the apps directory

import { Poppins } from 'next/font/google';

export const poppins = Poppins({
	weight: ['400'],
	subsets: ['latin'],
	variable: '--font-poppins',
});
