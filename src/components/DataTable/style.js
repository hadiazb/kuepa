import styled from 'styled-components';

export const Tabla = styled.div`
	width: 50%;
	height: 220px;
	margin-right: 10px;
	overflow-y: scroll;
	border-radius: 10px;
	background-color: #fff;
	box-shadow: 0 0 8px rgba(0, 0, 0, 0.7);
	&::-webkit-scrollbar {
    width: 3px;
		background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
		background-color: rgba(0, 0, 0, .2);
    border-radius: 1px;
  }
`;

export const Title = styled.div`
	height: 50px;
	width: 100%;
	display: flex;
	align-items: center;
	padding-left: 20px;
	font-size: 1.5em;
	border-bottom: 1px solid black;
`;
