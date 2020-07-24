import React from "react";
import styled from "styled-components";
import Button from "./Button";
function TaskCard() {
  return (
    <>
      <TaskWrapper>
        <div>HI</div>
        <Button>Edit My Task</Button>
      </TaskWrapper>
    </>
  );
}

const TaskWrapper = styled.div`
  height: 100px;
  width: 100px;
  background-color: #778899;
`;
export default TaskCard;
