import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
	table: {
		minWidth: 400,
		backgroundColor: '#d6e0d5',
	},
});

export const AcccessibleTable = () => {
	const classes = useStyles();
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
		<TableContainer component={Paper}>
			<Table
				className={classes.table}
				aria-label='caption table'
			>
				<TableHead>
					<TableRow>
						<TableCell component='th'>Name</TableCell>
						<TableCell align='right'>Phone</TableCell>
						<TableCell align='right'>Email</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{user.map((row) => (
						<TableRow key={row.id}>
							<TableCell scope='row'>
								{row.name}
							</TableCell>
							<TableCell align='right'>{row.phone}</TableCell>
							<TableCell align='right'>{row.email}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};
