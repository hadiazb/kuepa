import React from 'react';
import { Container, Box, SubBox, Content, Title } from './style';
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
				<Title>Leads Primer contacto</Title>
				<ul>
					<li>
						<PhoneIcon fontSize='small' />
						<MessageIcon fontSize='small' />
					</li>
					<li>
						<PhoneIcon fontSize='small' />
						<MessageIcon fontSize='small' />
					</li>
				</ul>
			</Content>
		</Container>
	);
};
