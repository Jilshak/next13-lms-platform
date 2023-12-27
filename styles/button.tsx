import styled from 'styled-components';

type ButtonProps = {
    bgColor?: string;

  };

const StyledButton = styled.button`
  background:  'palevioletred';
  color:'white';
  width: 100%;

  font-size:  '1em'};
  padding: 0.25em 1em;
  border-radius: 3px;

  &:hover {
    background:'#C74375';
  }
`;

export default StyledButton;
