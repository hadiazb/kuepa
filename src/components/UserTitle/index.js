import React from 'react';
import { User } from './style';

export const UserTitle = (props) => {
	const { name } = props;
	return <User>Hola, {name}</User>;
};
