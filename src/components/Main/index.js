import React from 'react';
import { Container, Menu, Img, ImgProfile } from './style';
import logo from '../../assets/images/Kuepa.png';
import HomeIcon from '@material-ui/icons/Home';
import ListIcon from '@material-ui/icons/List';
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';
import CropIcon from '@material-ui/icons/Crop';

export const Main = () => {
	const imgLogo =
		'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR-IFVAnDFmPDjhijJijwlt_XvLuLh3FJV-Ug&usqp=CAU';
	return (
		<Container>
			<Menu>
				<Img src={logo} alt='Logo de la Kuepa' />
				<HomeIcon color='disabled' style={{ fontSize: 40 }} />
				<ListIcon color='disabled' style={{ fontSize: 40 }} />
				<SpeakerNotesIcon
					color='disabled'
					style={{ fontSize: 40 }}
				/>
			</Menu>
			<Menu>
				<CropIcon color='disabled' style={{ fontSize: 40 }}/>
				<ImgProfile src={imgLogo} alt='Image Profile' />
			</Menu>
		</Container>
	);
};
