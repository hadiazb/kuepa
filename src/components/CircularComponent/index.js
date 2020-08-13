import React from 'react';
import { SubContainer, Box } from './style';
import { CircularStatic } from '../CircleDashboard/index';
import { Score } from '../Score/index';

export const CircularComponent = () => {
	return (
		<SubContainer>
			<CircularStatic />
			<Box>
				<Score />
				<Score />
				<Score />
			</Box>
		</SubContainer>
	);
};
