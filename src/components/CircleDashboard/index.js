import React, { useEffect, useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function CircularProgressWithLabel(props) {
	return (
		<Box
			position='relative'
			display='block'
			width={100}
			height={100}
		>
			<CircularProgress
				size={100}
				variant='static'
				{...props}
			/>
			<Box
				top={0}
				left={0}
				bottom={0}
				right={0}
				position='absolute'
				display='flex'
				alignItems='center'
				justifyContent='center'
			>
				<Typography
					variant='caption'
					component='div'
					color='textSecondary'
				>{`${Math.round(props.value)}%`}</Typography>
			</Box>
		</Box>
	);
}

export const CircularStatic = (props) => {
	const {value} = props
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setProgress((prevProgress) =>
				prevProgress >= 75 ? 1 : prevProgress + 1
			);
		}, 200);

		return timer;
	}, []);

	return (
		<CircularProgressWithLabel
			value={value}
		/>
	);
};
