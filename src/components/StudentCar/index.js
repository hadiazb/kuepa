import React from 'react';
import { Container, Title, List } from './style';

export const StudentCar = () => {
	return (
		<Container>
			<Title>
				<h6>FACEBOOK</h6>
			</Title>
			<List>
				<li>
					<h6>Name</h6>
				</li>
				<li>
					{' '}
					<h6>Username</h6>{' '}
				</li>
			</List>
		</Container>
	);
};
