import styled from 'styled-components';

export const Container = styled.div`
  width: 220px;
  height: 100px;
  margin: 15px 0;
  padding: 10px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0, 0, 0, .7);

`;
export const Box = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  border-radius: 8px;
`;

export const SubBox = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 110px;
  height: 100px;
  padding: 10px 5px;
`;