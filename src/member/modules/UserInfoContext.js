import { createContext, useState } from 'react';

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
  const value = {
    states: { userInfo, isLogin },
    actions: { setUserInfo, setIsLogin },
  };

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
