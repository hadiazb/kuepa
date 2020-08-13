import React from 'react';
import { List, Item } from './style';

export const Score = (props) => {
	const { value, title } = props;
	return (
		<List>
			<Item>
				<h5>{title ? title : 'Sin titulo'}</h5>
			</Item>
			<Item>
				<h4>{value? value : 'NaN'}/100</h4>
			</Item>
		</List>
	);
};
