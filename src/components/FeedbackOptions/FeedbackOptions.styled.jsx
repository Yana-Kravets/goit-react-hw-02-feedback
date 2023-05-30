import styled from '@emotion/styled';

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 50px;
`;

export const ButtonItem = styled.button`
    align-items: center;
    justify-content: center;
    min-width: 140px;
    height: 48px;
    text-decoration: none;
    cursor: pointer;
    font-size: 18px;
    font-weight: 700;
    text-transform: capitalize;
    border-radius: 5px;
    border: 1px solid #A991B6;
    color: #000000; 
    background-color: transparent;  
    box-shadow: 0px 4px 10px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
    transition: background-color 500ms linear;
    :hover:nth-of-type(1) {
        background-color: green;
    }
    :hover:nth-of-type(2) {
        background-color: orange;
    }
    :hover:nth-of-type(3) {
        background-color: red;
    }
`;

