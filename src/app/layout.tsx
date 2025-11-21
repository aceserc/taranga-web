import type { Metadata } from 'next';
import './globals.css';
import { currentTechfest } from '@/data/techfest';
import TopLoader from '@/components/loaders/top-loader';
import { GoogleAnalytics } from '@next/third-parties/google';
import PageViews from '@/components/ga/page-views';
import { CURRENT_TARANGA } from '@/contents/event-data';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="overflow-x-hidden scrollbar">
				{children}
				<TopLoader />
				<GoogleAnalytics
					gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID as string}
				/>
				<PageViews />
			</body>
		</html>
	);
}

// web metadata for SEO
export const metadata: Metadata = {
	title: {
		template: `%s | ${CURRENT_TARANGA.label} - Taranga ACES x EXCESS`,
		default: `${CURRENT_TARANGA.label} - Taranga ACES x EXCESS`,
	},
	description:
		'Taranga - The wave of Technology is a joint tech fest by EXCESSxTech and ACES TechFest, bringing together brilliant minds of IOE Purwanchal Campus to collaborate, innovate and inspire the new wave of technology.',
	icons: [
		{
			url: '/assets/images/logo.png',
		},
	],
	keywords: [
		'ACES',
		'EXCESS',
		'Electronics and Communication Engineering Student Society',
		'Association of Computer Engineering Students',
		'Electronics Engineering',
		'Electronics, Communication and Information Engineering',
		'Communication Engineering',
		'Computer Engineering',
		'Engineering',
		'Computer',
		'Electronics',
		'ACES Nepal',
		'EXCESS Nepal',
		'ACES Dharan',
		'EXCESS IOE',
		'ACES Dharan Nepal',
		'ACES IOE',
		'IOE',
		'Institute of Engineering',
		'IOE Purwanchal Campus',
		'Purwanchal Campus',
		'ACES Purwanchal Campus',
		'EXCESS Purwanchal Campus',
		'Electronics and Communication Engineering Students',
		'Computer Engineering Students',
		'Engineering Students',
		'Computer Students',
		'Electronics Students',
		'ACES Community',
		'ACES Community Nepal',
		'ACES Community Dharan',
		'ACES Community Dharan Nepal',
		'ACES Community IOE',
		'ACES Community IOE Purwanchal Campus',
		'ACES Community Purwanchal Campus',
		'ACES x EXCESS Taranga',
		'EXCESS Community',
		'EXCESS Community Nepal',
		'EXCESS Community Dharan',
		'EXCESS Community Dharan Nepal',
		'EXCESS Community IOE',
		'EXCESS Community IOE Purwanchal Campus',
		'EXCESS Community Purwanchal Campus',
		'Taranga',
		'Taranga Nepal',
		'Taranga Dharan',
		'Taranga Dharan Nepal',
		'Taranga IOE',
		'Taranga IOE Purwanchal Campus',
		'Taranga Purwanchal Campus',
		'ACES x EXCESS Taranga Nepal',
		'ACES x EXCESS Taranga Dharan',
		'Delta',
		'Delta',
		'Delta Nepal',
	],

	// developers contact links
	authors: [
		{
			name: 'jrTilak',
			url: 'https://jrtilak.dev',
		},
	],
	category: 'Engineering and Technology',

	// social media preview
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://taranga.ioepc.edu.np',
		images: '/preview.png',
		countryName: 'Nepal',
		title: `${currentTechfest.label} | ACES Taranga`,
		emails: ['aces@ioepc.edu.np'],
		description:
			'Taranga - The wave of Technology is a joint tech fest by EXCESSxTech and ACES TechFest, bringing together brilliant minds of IOE Purwanchal Campus to collaborate, innovate and inspire the new wave of technology.',
	},

	// robots.txt
	robots: {
		index: true,
		follow: true,
		nocache: true,
		googleBot: {
			index: true,
			follow: true,
			noimageindex: true,
			'max-video-preview': -1,
			'max-image-preview': 'standard',
			'max-snippet': -1,
		},
	},
};
