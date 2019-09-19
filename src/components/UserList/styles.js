import styled from 'styled-components';

export const StyledUserList = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  width: 100%;
  min-width: 300px;

  & > ul {
    list-style: none;
  }
`;
