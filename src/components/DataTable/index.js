import React from 'react';
import { Tabla, Title } from './style';
import { AcccessibleTable } from '../Table/index';

export const DataTable = () => {
	return (
		<Tabla>
			<Title>Conexiones de agenda para hoy</Title>
			<AcccessibleTable />
		</Tabla>
	);
};
