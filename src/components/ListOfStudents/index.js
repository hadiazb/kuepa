import React, { useEffect, useState } from 'react';
import { Container, List, Item } from './style';
import { StudentCar } from '../StudentCar/index';

export const StudentContainer = () => {
	const [user, setUser] = useState([]);
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((json) => setUser(json))
			.catch((error) =>
				console.error('Error en la peticion', error)
			);
	});
	return (
		<Container>
			<List>
				{user.map((id) => (
					<Item key={id.id}>
						<StudentCar
						socialNetwork='Facebook'
						name={id.name}
						username={id.username}
						/>
					</Item>
				))}
			</List>
		</Container>
	);
};
