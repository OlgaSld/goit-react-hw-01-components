import styled from 'styled-components';

export const Statictics = styled.section`
  width: 480px;
  display: block;
  margin: 0 auto;
  /* padding-top: 50px;
    padding-bottom: 50px; */
  background-color: #f0ecec;
  border: 1px solid;
  border-color: #e1dddd;
  border-radius: 4px;
`;

export const Title = styled.h2`
    padding-top: 50px;
    padding-bottom: 50px;
    font-size: 28px;
    font-weight: 700;
    color: #6e6a6a;
    text-transform: uppercase;
    text-align: center;
    background-color: #fff;
`

export const StatList = styled.ul`
    display: flex;
    flex-wrap: wrap;
`

export const StatItem = styled.li`
  width: calc(100% / 4);
  text-align: center;
  padding-top: 30px;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.span`
  font-size: 24px;
  font-weight: 500;
  color: #fff;
  margin-bottom: 8px;
`;

export const Percentage = styled.span`
  font-size: 28px;
  font-weight: 500;
  color: #fff;
`;