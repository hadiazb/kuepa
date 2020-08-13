import React from 'react';
import { MediumPlace } from './style';
import { CircularComponent } from '../CircularComponent/index';
import { LinearComponent } from '../LinearComponent/index';

export const SectionMedium = () => {
	return (
		<MediumPlace>
			<CircularComponent />
			<LinearComponent />
		</MediumPlace>
	);
};
