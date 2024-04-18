import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../outlines/Header';
import Footer from '../outlines/Footer';

const MainBox = styled.main`
  min-height: 650px;
  position: relative;
`;

const MainLayout = () => {
  return (
    <>
      <Header />
      <MainBox>
        <Outlet />
      </MainBox>
      <Footer />
    </>
  );
}; // 헤더, 푸터 컴포넌트 불러와서 적용함

export default React.memo(MainLayout); // 캐싱, 불필요한 렌더링 방지
