import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import LoginContainer from '../containers/LoginContainer';
import GuestOnlyContainer from '../containers/GuestOnlyContainer';
//import { UserInfoConsumer } from '../modules/UserInfoContext';
//import UserInfoContext from '../modules/UserInfoContext'
import fontSize from '../../styles/fontSize';
const { medium } = fontSize;

const OuterBox = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    text-align: center;
    font-size: ${medium};
    margin: 0 0 10px;
    padding: 0;
    line-height: 1;
  }
`;

const Login = () => {
  const { t } = useTranslation();
  /*
  return (<UserInfoConsumer>
    {({states: {userInfo, isLogin}, actions})=>(
      <>
      {isLogin && <div>{userInfo.email}/{userInfo.name}</div>}
        <button type="button" onClick={()=>loginProcess(actions)}>로그인</button>
      </>
    )} 
  </UserInfoConsumer>
  ); //버튼 클릭시 상태값 바뀜
  */
  return (
    <GuestOnlyContainer>
      <Helmet>
        <title>{t('로그인')}</title>
      </Helmet>
      <OuterBox>
        <h1>{t('로그인')}</h1>
        <LoginContainer />
      </OuterBox>
    </GuestOnlyContainer>
  );
};

export default React.memo(Login);
