import styled from "styled-components";

export const GameInfo = ({ winner, renderMoves, turns }) => {
  return (
    <div>
      <div>{!winner ? <h3>Turn: {turns ? "O" : "X"}</h3> : <h3>Winner: {turns ? "X" : "O"} </h3>}</div>
      {renderMoves()}
    </div>
  );
};
