import React, { useState } from "react";
import Button from "./Button";
import styled from "styled-components";
function SearchBar() {
  const [value, setValue] = useState("");
  return (
    <>
      <div>
        <StyledSearch
          type="text"
          value={value}
          placeholder="Find a Task"
          onChange={(ev) => setValue(ev.target.value)}
        ></StyledSearch>

        <Button>Search</Button>
      </div>
    </>
  );
}

const StyledSearch = styled.input`
  width: 200px;
  height: 10px;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export default SearchBar;
