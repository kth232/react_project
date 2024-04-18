const TextComponent = ({ children }) => {
    const value = { userInfo: { email: 'user01@test.org', name: '사용자01' } };
    return children(value);
  };
  //consumer에서 넘겨준 값
  export default TextComponent;