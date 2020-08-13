import React from 'react';
import { SubContainer, Box } from './style';
import { CircularStatic } from '../CircleDashboard/index';
import { Score } from '../Score/index';

export const CircularComponent = (props) => {
	const {
		title1 = 'Leads Obtenidos',
		title2 = 'Matriculas Finalizadas',
		title3 = 'Cola de llamadas',
	} = props;

	return (
		<SubContainer>
			<CircularStatic value={75} />
			<Box>
				<Score value={75} title={title1} />
				<Score value={75} title={title2} />
				<Score value={75} title={title3} />
			</Box>
		</SubContainer>
	);
};
