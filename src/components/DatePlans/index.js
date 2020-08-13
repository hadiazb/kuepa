import React from 'react';
import { Titles, Objectives, Container } from './style';
import { CardActivity } from '../CardActivity/index';

export const DatePlans = () => {
	return (
		<Objectives>
			<Titles>
				<li>
					<h2>Tu plan de Hoy</h2>
				</li>
				<li>
					<h6>Ir a la gestion de llamadas</h6>
				</li>
			</Titles>
			<Container>
				<CardActivity />
				<CardActivity />
				<CardActivity />
			</Container>
		</Objectives>
	);
};
