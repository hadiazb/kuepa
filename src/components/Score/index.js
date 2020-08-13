import { ListItemAvatar } from '@material-ui/core';
import React from 'react';
import { List, Item } from './style';

export const Score = () => {
	return (
		<List>
			<Item>
				<h5>Leads Obtenidos</h5>
			</Item>
			<Item>
				<h4>50/100</h4>
			</Item>
		</List>
	);
};
