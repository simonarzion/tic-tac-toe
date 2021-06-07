import styled from "styled-components";

const StyledSquare = styled.button`
  background: #fff;
  border: 1px solid #999;
  font-weight: bold;
  text-align: center;
  border-radius: 0;
  min-width: 50px;
  min-height: 50px;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;

  &.disabled {
    background-color: #ccc;
    pointer-events: none;
  }
`;

export const Square = ({ i, onClick, squares }) => {
  return <StyledSquare onClick={() => onClick(i)}>{squares[i]}</StyledSquare>;
};
