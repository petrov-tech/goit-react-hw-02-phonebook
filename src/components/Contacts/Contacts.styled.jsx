import styled from '@emotion/styled';

const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 300px;
  outline: 1px solid grey;
  padding: 10px;
`;
const ContactEl = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  p {
    margin-right: 10px;
  }
  button {
    width: 100px;
    background-color: #d4e5f6;
    border: none;
    border-radius: 5px;
    height: 20px;
  }
`;

export { ContactEl, ContactsList };
