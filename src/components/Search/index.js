import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export const Search = () => {
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
		<div style={{ width: 200 }}>
			<Autocomplete
				freeSolo
				id='free-solo-2-demo'
				disableClearable
				options={user.map((option) => option.name)}
				renderInput={(params) => (
					<TextField
						{...params}
						label='Search...'
						margin='normal'
						variant='outlined'
						InputProps={{ ...params.InputProps, type: 'search' }}
					/>
				)}
			/>
		</div>
	);
};
