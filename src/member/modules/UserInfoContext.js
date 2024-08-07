import { createContext, useState } from 'react';
import cookies from 'react-cookies';
import { apiUser } from '../apis/apiLogin';

const UserInfoContext = createContext({
  states: {
    // 상태값
    userInfo: null,
    isLogin: false,
  },
  actions: {
    //상태 변경 함수
    setUserInfo: null,
    setIsLogin: null,
  },
});
const UserInfoProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [isLogin, setIsLogin] = useState(null);
  const [isAdmin, setIsAdmin] = useState(null);
  const value = {
    states: { userInfo, isLogin, isAdmin },
    actions: { setUserInfo, setIsLogin },
  };

  const token = cookies.load('token');
  if (!isLogin && token && token.trim()){ //로그인 상태가 아닐 때 토큰 제거
    (async () => {
      try{
        const user = await apiUser();
        setUserInfo(user);
        setIsLogin(true);

        const _isAdmin = user.authorities.some((a) => a.authorities === 'ADMIN'); //some: 1개라도 매칭되면 참
        setIsAdmin(_isAdmin);
      } catch (err) {
        //토큰 만료, 토큰이 잘못된 경우
        cookies.remove('token', {path: '/'});
      }
    })();
  }

  return (
    <UserInfoContext.Provider value={value}>
      {children}
    </UserInfoContext.Provider>
  );
};

const { Consumer: UserInfoConsumer } = UserInfoContext;

export { UserInfoConsumer, UserInfoProvider };
//리액트 전역에서 모든 컴포넌트 접근 가능하도록 상태 관리
export default UserInfoContext;
