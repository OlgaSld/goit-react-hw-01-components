import styled from 'styled-components';

export const ListItem = styled.li`
    display: flex;
    margin-left: 15px;
    padding-top: 15px;
    padding-bottom: 15px;
    gap: 20px;
    width: 480px;
    align-items: center;
    border-radius: 10px;
    box-shadow: 3px 5px 2px 5px rgba(140, 140, 143, 0.2);;
`;

export const Status = styled.span`
    margin-left: 15px;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: ${props => props.$status ? "green" : "red"};
`

export const Avatar = styled.img`
    width: 85px;
`

export const UserName = styled.p`
    font-size: 30px;
    font-weight: 700px;
`