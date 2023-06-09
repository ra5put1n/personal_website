import tw from 'twin.macro';
import { css } from '@emotion/react';

export const ElementStyles = css`
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		${tw`
			dark:text-white
		`}

		a {
			${tw`
				float-left \
				mt-0.5 -ml-5 pr-2 \
				border-none \
				opacity-0 no-underline
			`}

			.icon-link:before {
				content: '#';
			}
		}

		&:hover,
		&:focus {
			a {
				${tw`
					opacity-100
					no-underline
				`}
			}
		}
	}

	a {
		${tw`
			dark:text-white \
			no-underline rounded \
			transition duration-300 ease-in-out \
			focus:outline-none focus:ring-4 focus:ring-primary-500 focus:ring-offset-2
		`}

		.item {
			${tw`
				border-b-0 \
				opacity-60 no-underline \
				transition duration-300 ease-in-out
			`}

			&:hover {
				${tw`
					opacity-100
				`}
			}
		}
	}

	p,
	ul,
	li {
		${tw`
			text-gray-400
		`}
	}

	strong {
		${tw`
			dark:text-white
		`}
	}

	img {
		${tw`
			rounded-3xl object-cover select-none hover:shadow-xl \
			transition ease-in-out duration-300
		`}
	}

	figcaption {
		${tw`
			text-gray-200 dark:text-gray-400 \
			text-center
		`}
	}

	hr {
		${tw`
			my-4 \
			dark:border-gray-600
		`}
	}

	code {
		${tw`
			mx-0.5 py-1 px-2 \
			text-gray-400 dark:text-gray-100 \
			rounded-lg
		`}

		&:after,
		&:before {
			${tw`
				hidden
			`}
		}
	}

	th {
		${tw`
			dark:text-white
		`}
	}

	td {
		${tw`
			dark:text-gray-400
		`}
	}

	ol li::before {
		${tw`
			dark:text-gray-300
		`}
	}
`;
