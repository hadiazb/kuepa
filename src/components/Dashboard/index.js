import React from 'react';
import { Container } from './style';
import { SectionEnd } from '../SectionEnd/index';
import { Header } from '../Header/index';
import { SectionMedium } from '../SectionMedium/index';
import { UserTitle } from '../UserTitle/index';

export const Dashboard = () => {
	return (
		<Container>
			<Header />
			<UserTitle name='Julian' />
			<SectionMedium />
			<SectionEnd />
		</Container>
	);
};
