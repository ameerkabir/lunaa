import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import LoginForm from "./login";
import SidBarBanner from "./SideBarBanner";

const Container = styled.div`
  display: flex;
  /* justify-content: center;
  justify-items: center;
  align-items: center; */
  height: 100vh;
  padding: 16px;
`;

const LinkWrapper = styled(Link)`
  margin: 8px;
`;

const MainHeader = styled.h1`
  /* margin-bottom: 4px; */
`;

export default function Home() {
  return (
    <>
      <Container>
        <SidBarBanner />
        <LoginForm />
      </Container>
    </>
  );
}
