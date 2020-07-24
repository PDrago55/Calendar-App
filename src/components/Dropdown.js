import React, { useState } from "react";
import styled from "styled-components";
import users from "./users.json";
function Dropdown() {
  const [myUser, setUser] = useState("");
  console.log(myUser);
  return (
    <>
      <MyLabel for="users">Who's Tasks Are You Looking For?: </MyLabel>
      <StyledSelect
        defaultValue=""
        onChange={(ev) => {
          console.log(ev.target.value);
          setUser(ev.target.value);
        }}
      >
        <option selected>users</option>
        {users.users.map((user) => {
          return (
            <>
              <option value={user.user}>{user.user}</option>
            </>
          );
        })}
      </StyledSelect>
      {users.users.includes(myUser) ? <div>{users.users.user}</div> : "bye"}
    </>
  );
}

const MyLabel = styled.label`
  margin: 20px 0px;
`;
const StyledSelect = styled.select`
  width: 200px;
  height: 30px;
  font-size: 18px;
  cursor: pointer;
  option {
    font-size: 16px;
    cursor: pointer;
    background-color: #ffffff;
  }
`;
export default Dropdown;
