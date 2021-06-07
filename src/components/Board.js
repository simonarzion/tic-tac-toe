import styled from "styled-components";
import { Square } from "./Square";

const StyledBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const Board = ({ handleClick, squares }) => {
  return (
    <StyledBoard>
      {squares.map((e, i) => {
        return <Square key={i} onClick={handleClick} i={i} squares={squares} />;
      })}
    </StyledBoard>
  );
};
