import React from 'react';
import { makeStyles, rgbToHex } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { yellow } from '@material-ui/core/colors';
import { SportsRugbySharp } from '@material-ui/icons';

const useStyles = makeStyles({
	table: {
		minWidth: 400,
		backgroundColor: "rgb(237,246,236)",
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
	createData('Hugo Diaz1', 'Llamasr', 0, 0),
	createData('Hugo Diaz2', 'Llamasr', 0, 0),
	createData('Hugo Diaz3', 'Llamasr', 0, 0),
	createData('Hugo Diaz4', 'Llamasr', 0, 0),
	createData('Hugo Diaz5', 'Llamasr', 0, 0),
	createData('Hugo Dia5z', 'Llamasr', 0, 0),
	createData('Hugo Dia3z', 'Llamasr', 0, 0),
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
