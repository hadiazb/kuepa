import React from 'react';
import { Search } from '../Search/index';
import { Date } from '../Date/index';
import { Head } from './style';

export const Header = () => {
	return (
		<Head>
			<Search />
			<Date />
		</Head>
	);
};
