import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
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

CircularProgressWithLabel.propTypes = {
	/**
	 * The value of the progress indicator for the determinate and static variants.
	 * Value between 0 and 100.
	 */
	value: PropTypes.number.isRequired,
};

export const CircularStatic = () => {
	const [progress, setProgress] = React.useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setProgress((prevProgress) =>
				prevProgress >= 50 ? 1 : prevProgress + 1
			);
		}, 200);
		return () => {
			clearInterval(timer);
		};
	}, []);

	return <CircularProgressWithLabel value={75} />;
};
