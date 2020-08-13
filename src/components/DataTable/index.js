import React from 'react';
import { Tabla } from './style';
import { AcccessibleTable } from '../Table/index';

export const DataTable = () => {
	return (
		<Tabla>
			<h4>Conexiones de agenda para hoy</h4>
			<AcccessibleTable />
		</Tabla>
	);
};
