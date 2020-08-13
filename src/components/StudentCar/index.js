import React from 'react';
import { Container, Title, List, Text } from './style';

export const StudentCar = (props) => {
	const { socialNetwork, name, username } = props;
	return (
		<Container>
			<Title>
				<h6>{socialNetwork}</h6>
			</Title>
			<List>
				<li>
					<Text>{name}</Text>
				</li>
				<li>
					<Text>{username}</Text>
				</li>
			</List>
		</Container>
	);
};
