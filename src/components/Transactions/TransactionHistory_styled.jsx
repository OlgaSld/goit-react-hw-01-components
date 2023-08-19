import styled from 'styled-components';

export const TransacHistory = styled.table`
  width: 900px;
  margin: 50px auto;
  border: 1px solid;
  border-color: #dad4d4;

  th {
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: #06d0d7;
    text-transform: uppercase;
    color: white;
    font-size: 16px;
    font-weight: 700;
    text-align: center;
  }

  td {
    padding-top: 10px;
    padding-bottom: 10px;
    text-align: center;
    border-collapse: collapse;
    border-right: 0.5px solid;
    border-color: #b9b4b4;
  }

  tr:nth-child(even) {
    background-color: #e8e5e5;
  }
`;