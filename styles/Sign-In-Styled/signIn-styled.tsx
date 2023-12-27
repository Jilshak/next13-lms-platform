import styled from "styled-components";


interface MyComponentProps {
    bg: string;
    hover: string
}

export const SignInStyled = styled.div<MyComponentProps>`
    width: 100%;
    background-color: ${(props) => props.bg}; 
    color: white;
    height: 38px;
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
        background-color: ${(props) => props.hover};
    }
`




