import { styled, ThemeProvider, createGlobalStyle } from "styled-components";

import { Outlet } from "react-router-dom";

import { HiSearch } from "react-icons/hi";

import { CgBell } from "react-icons/cg";

// Header
const Header = styled.div`
  padding: 12px 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Header_Left = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const Header_Right = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Iconset = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 24px;

  width: 40px;
  height: 40px;
`;

const Button = styled.div`
  height: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  align-items: center;
  margin-left: 0.5rem;

  font-size: 1rem;
  border-radius: 1rem;
  border: none;
  outline: none;

  background-color: #212529;
  color: #FFF;
  font-weight: 700;
`;

const Topnav = () => {
  return (
    <>
      <Header>
        <Header_Left>
          velog
        </Header_Left>
        <Header_Right>
          <Iconset>
            <CgBell />
          </Iconset>
          <Iconset>
            <HiSearch />
          </Iconset>
          <Button>로그인</Button>
        </Header_Right>
      </Header>
    </>
  )
}

function App() {
  return (
    <>
      <Topnav />
      <Outlet />
    </>
  );
}

export default App;
