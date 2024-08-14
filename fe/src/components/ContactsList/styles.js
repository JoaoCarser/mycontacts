import styled from "styled-components";

export const Container = styled.div`
    margin-top: 32px;
`;

export const Header = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
    
    strong{
        color: #222;
        font-size: 24px;
    }

    a{
        font-size: 16px;
        color: ${({theme}) => theme.colors.primary.main};
        text-decoration: none;
        font-weight: bold;
        border: 2px solid ${({theme}) => theme.colors.primary.main};
        border-radius: 4px;
        padding: 8px 16px;
        transition: all 0.2s ease-in;


        &:hover{
            color: ${({theme}) => theme.colors.primary.lighter};
            background-color: ${({theme}) => theme.colors.primary.dark};
        }
    }
`;