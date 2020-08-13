import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Container } from './style';

const useStyles = makeStyles({
	root: {
		width: '100%',
	},
});

export const LinearDeterminate = (props) => {
	const { value, title } = props;
	const classes = useStyles();
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setProgress((oldProgress) => {
				if (oldProgress === 100) {
					return 0;
				}
				const diff = Math.random() * 10;
				return Math.min(oldProgress + diff, 100);
			});
		}, 500);

		return () => {
			clearInterval(timer);
		};
	}, []);

	return (
		<div className={classes.root}>
			<Container>
				<li>
					<h6>{title ? title : 'Sin title'}</h6>
				</li>
				<li>
					<h6>{value ? value : 50}/100</h6>
				</li>
			</Container>
			<LinearProgress
				variant='determinate'
				value={value ? value : 50}
			/>
		</div>
	);
};
