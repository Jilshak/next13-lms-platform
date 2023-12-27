import styled from 'styled-components';

interface CourseCardProps {
    bg: string;
    hover: string;
    color: string
}

export const StyledCourseCard = styled.div<CourseCardProps>`
    width: 100%;
    background-color: ${(props) => props.bg};
    color: ${(props) => props.color};
    height: auto;
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    transition: all 0.3s ease-in-out;
    &:hover {
        background-color: ${(props) => props.hover};
        transform: scale(1.1);
    }
`;
