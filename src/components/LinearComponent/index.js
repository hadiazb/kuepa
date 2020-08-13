import React from 'react';
import { ContainerLinear } from './style';
import { LinearDeterminate } from '../LinearDashboard/index';

export const LinearComponent = () => {
	return (
		<ContainerLinear>
			<h3>Meta Grupal</h3>
			<LinearDeterminate />
			<LinearDeterminate />
		</ContainerLinear>
	);
};
