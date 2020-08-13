import React from 'react';
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
	},
});

function createData(
	name,
	activity,
	status,
	llamar,
	message
) {
	return { name, activity, status, status };
}

const rows = [
	createData('Hugo Diaz', 'Llamasr', 0, 0),
	createData('Hugo Diaz', 'Llamasr', 0, 0),
	createData('Hugo Diaz', 'Llamasr', 0, 0),
	createData('Hugo Diaz', 'Llamasr', 0, 0),
	createData('Hugo Diaz', 'Llamasr', 0, 0),
	createData('Hugo Diaz', 'Llamasr', 0, 0),
	createData('Hugo Diaz', 'Llamasr', 0, 0),
	createData('Hugo Diaz', 'Llamasr', 0, 0),
];

export const AcccessibleTable = () => {
	const classes = useStyles();

	return (
		<TableContainer component={Paper}>
			<Table
				className={classes.table}
				aria-label='caption table'
			>
				<TableHead>
					<TableRow>
						<TableCell>Persons</TableCell>
						<TableCell align='right'>Schedule</TableCell>
						<TableCell align='right'>Status</TableCell>
						<TableCell align='right'>Activity</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.name}>
							<TableCell component='th' scope='row'>
								{row.name}
							</TableCell>
							<TableCell align='right'>{row.activity}</TableCell>
							<TableCell align='right'>{row.status}</TableCell>
							<TableCell align='right'>{row.status}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};
