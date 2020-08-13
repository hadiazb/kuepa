import React from 'react';
import { ContainerLinear } from './style';
import { LinearDeterminate } from '../LinearDashboard/index';

export const LinearComponent = (props) => {
	const {
		title1 = 'Loads obetnidas',
		title2 = 'Matriculas obtenidas',
		value1 = 75,
		value2 = 66,
	} = props;
	return (
		<ContainerLinear>
			<h3>Meta Grupal</h3>
			<LinearDeterminate value={value1} title={title1}/>
			<LinearDeterminate value={value2} title={title2}/>
		</ContainerLinear>
	);
};
