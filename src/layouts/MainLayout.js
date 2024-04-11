import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../outlines/Header';
import Footer from '../outlines/Footer';

const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}; // 헤더, 푸터 컴포넌트 불러와서 적용함

export default React.memo(MainLayout); // 캐싱, 불필요한 렌더링 방지
