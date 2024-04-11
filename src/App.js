import {Route, Routes} from 'react-router-dom'
import loadable from '@loadable/component';

const MainLayout = loadable (()=>import('./layouts/MainLayout'))
const NotFound = loadable (()=>import('./commons/pages/NotFound'))
const Main = loadable (()=>import('./main/pages/Main')) //main page

/* 회원 페이지 S */
const Signup= loadable(()=>import('./member/pages/Signup'))
const Login= loadable(()=>import('./member/pages/Login'))
/* 회원 페이지 E */

const App = () => {
  return (
    <Routes>
       <Route path="/" element={<MainLayout />}>
        <Route index element={<Main />} /> {/* 메인 페이지 */}
        
        {/* 회원 페이지 S */}
        <Route path = 'member'> 
          <Route path='Signup' elememt={<Signup/>} />
          <Route path="member" element={<MainLayout/>} />
        </Route>
        {/* 회원 페이지 E */}
        <Route path="*" element={<NotFound />} /> {/* 없는 페이지 */}
      </Route>
    </Routes>
  );
};

export default App;

/*
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next'; //다른 라이브러리와 헷갈리지 않게 주의!

const App = () => {
  const { t, i18n } = useTranslation();
  return ( //바꾸고자 하는 태그 정의, 주로 title태그 사용 
    <>
      <Helmet>
        <title>site title test</title>
      </Helmet>
      
      <div>{t('아이디')}</div>
      <div>{t('약관에_동의')}</div>
      <div>{t('없는_문구')}</div>
      <button type="button" onClick={()=>i18n.changeLanguage('ko')}>한국어</button>
      <button type="button" onClick={()=>i18n.changeLanguage('en')}>English</button>
    </>
  ); // i18n에 설정한 언어로 표현, 문구 없을 때는 입력한 그대로 출력, 일단 써놓고 차후 문구 설정해도 됨
};
export default App;
*/
