import React from "react";
import SecondNB from "./SecondNB";
import Sidebar from "./Sidebar";
import CalendarTable from "./CalendarTable";
import styled from "styled-components";
function MainPage() {
  return (
    <>
      <h1>My Planning</h1>
      <SecondNB />
      <Wrapper>
        <SideBarWrapper>
          <Sidebar />
        </SideBarWrapper>
        <MainCalenderWrapper>
          <CalendarTable />
        </MainCalenderWrapper>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

const MainCalenderWrapper = styled.div`
  height: 100%;
  border: 1px solid;
  width: 100%;
`;
const SideBarWrapper = styled.div`
  height: 100%;
  width: 33%;
  border: 1px solid;
`;
export default MainPage;
