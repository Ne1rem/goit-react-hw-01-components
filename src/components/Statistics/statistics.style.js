import styled from 'styled-components'

export const Container = styled.section`
  max-width: 555px;
  max-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  background-color: #d1d1d1;
  border-radius: 10px;
  margin-bottom: 80px;
`;

export const Title = styled.h2`
  font-size: 35px;
  margin: 50px auto;
  text-align: center;
  color: green;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0px;
  display: flex;
`;

export const StatLi = styled.li`
  display: flex;
  gap: 10px;
  padding: 5px;
  flex-direction: column;
  font-size: 20px;
  font-weight: 600;
  padding:35px;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  background-color: ${(props) => {
    switch (props.dataId) {
      case 'id-1':
        return `#00FFFF`;
      case 'id-2':
        return `#cc00ff`;
      case 'id-3':
        return `#ff0066`;
      case 'id-4':
        return `#669900`;
      case 'id-5':
        return `#000000`;
      default:
        return `transparent`;
    }
  }};
  transition: 200ms ease;
  :last-child {
    color: #fff;
  }
  &:hover {
    scale: 1.05;
    cursor: pointer;
  }
`;