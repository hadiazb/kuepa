import styled from 'styled-components';

export const Container = styled.div`
	width: 70px;
	height: 50px;
  margin: 15px 10px;
  color: #ffffff;
`;

export const Title = styled.div`
	width: 100%;
	height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(11, 73, 5, .8);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top: 1px solid rgba(255, 255, 255, .2);
  border-left: 1px solid rgba(255, 255, 255, .2);
  border-right: 1px solid rgba(255, 255, 255, .2);
`;

export const List = styled.ul`
	width: 100%;
  height: 100%;
  padding: 10px 0 10px 5px;
  background-color: rgba(0, 0, 0, .2);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left: 1px solid rgba(255, 255, 255, .2);
  border-right: 1px solid rgba(255, 255, 255, .2);
  border-bottom: 1px solid rgba(255, 255, 255, .2);
`;