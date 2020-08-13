import React from 'react';
import { Container, User } from './style';
import { SectionEnd } from '../SectionEnd/index';
import { Header } from '../Header/index';
import { SectionMedium } from '../SectionMedium/index';

export const Dashboard = () => {
	return (
		<Container>
			<Header />
			<User>Hola, Jorge</User>
			<SectionMedium />
			<SectionEnd />
		</Container>
	);
};
