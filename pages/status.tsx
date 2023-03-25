import styled from '@emotion/styled';
import tw from 'twin.macro';

import { Layout } from '~/layouts';
import { Status } from '~/components';

const Container1 = styled.div(tw`
	flex flex-grow min-h-screen \
	pt-16 pb-12
`);

const Content1 = styled.div(tw`
	flex-grow flex flex-col justify-center max-w-sm sm:max-w-lg w-full \
	mx-auto px-0 sm:px-16
`);

export default function StatusPage() {
	return (
		<Layout.Default seo={{ title: 'Krishna ─ status' }}>
			<Container1>
				<Content1>
					<title>What am I upto?</title>
					<Status.Widget />
				</Content1>
			</Container1>
		</Layout.Default>
	);
}