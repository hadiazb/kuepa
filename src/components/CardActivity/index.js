import React from 'react';
import { Container, Box, SubBox, Content } from './style';
import PhoneIcon from '@material-ui/icons/Phone';
import MessageIcon from '@material-ui/icons/Message';

export const CardActivity = () => {
	return (
		<Container>
			<Box>
				<SubBox>
					<h3>30</h3>
				</SubBox>
			</Box>
			<Content>
				<h5>Leads Primer contacto</h5>
				<ul>
					<li>
						<PhoneIcon />
						<MessageIcon />
					</li>
					<li>
						<PhoneIcon />
						<MessageIcon />
					</li>
				</ul>
			</Content>
		</Container>
	);
};
