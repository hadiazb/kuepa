import styled from 'styled-components';

export const Container = styled.div`
	width: 110px;
  height: 100vh;
  padding: 20px 30px 20px 0;
	position: absolute;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
	background-color: #033549;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const Img = styled.img`
  width: 40px;
  height: 40px;
  margin-bottom: 40px;
  border-radius: 50%;
`;

export const ImgProfile = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 10px 0;
`;
