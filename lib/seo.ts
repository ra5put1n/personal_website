import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import type { ComponentProps } from 'react';

export function useSeoProps(): Partial<ComponentProps<typeof NextSeo>> {
	const router = useRouter();

	const title = 'Krishna Kaipa';
	const description = "Hey 👋 I'm Krishna, a developer";

	return {
		title,
		description,
		canonical: `https://kr1shna.me/${router.asPath}`,
		openGraph: {
			title,
			description,
			site_name: 'nuro',
			url: `https://kr1shna.me/${router.asPath}`,
			type: 'website',
			images: [
				{
					url: '/banner.png',
					alt: description,
					width: 1280,
					height: 720,
				},
			],
		},
		twitter: {
			cardType: 'summary_large_image',
			handle: '@nkrishna_kaipa',
			site: '@nkrishna_kaipa',
		},
	};
}
