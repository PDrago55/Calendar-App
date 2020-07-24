import React from "react";
import SearchBar from "./SearchBar";
import Dropdown from "./Dropdown";
import styled from "styled-components";
function Sidebar() {
  return (
    <SideBarWrapper>
      <h1>My Personal Planning</h1>
      <SearchBar />
      <Dropdown />
    </SideBarWrapper>
  );
}

const SideBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding-left: 12px;
`;
export default Sidebar;
