import styled from 'styled-components';

export const Container = styled.div`
  width: 130px;
  height: 100vh;
  padding: 20px 0 20px 15px;
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  background-color: #033549 ;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 4px;
		background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
		background-color: rgba(0, 0, 0, .7);
    border-radius: 2px;
  }
`;

export const List = styled.ul`
  list-style: none;
`;

export const Item = styled.li`
  margin: 10px 0;
  border: 1px solid transparent;
`;