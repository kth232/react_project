import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { RiLock2Fill } from 'react-icons/ri';
import { FaKey, FaUserPlus } from 'react-icons/fa6';
import InputBox from '../../commons/components/InputBox';
import { MidButton } from '../../commons/components/Buttons';
import MessageBox from '../../commons/components/MessageBox';
import fontSize from '../../styles/fontSize';

const { normal } = fontSize;

const FormBox = styled.form`
  width: 350px;
  margin: 0 auto;

  input {
    margin-bottom: 5px;
  }
`;
const LinkBox = styled.form`
  width: 350px;
  margin: 10px auto 0;
  display: flex;
  border: 1px solid #d5d5d5;
  border-left: 0;
  border-right: 0;

  a {
    flex-grow: 1;
    width: 0;
    text-align: center;
    padding: 10px 0;
    font-size: ${normal};

    svg {
      vertical-align: middle;
    }
  }
`;

const LoginForm = ({ form, onSubmit, onChange, errors }) => {
  const { t } = useTranslation();
  return (
    <>
      <FormBox autoComplete="off" onSubmit={onSubmit}>
        <InputBox
          type="text"
          name="email"
          value={form.email ?? ''}
          placeholder={t('이메일')}
          onChange={onChange}
        />
        <MessageBox messages={errors.email} color="danger"/>
        <InputBox
          type="password"
          name="password"
          value={form.password ?? ''}
          placeholder={t('비밀번호')}
          onChange={onChange}
        />
        <MessageBox messages={errors.password} color="danger"/>
        <MidButton type="submit" color="primary">
          {t('로그인')}
        </MidButton>
      </FormBox>
      <LinkBox>
        <Link to="/member/find_id">
          <RiLock2Fill />
          {t('아이디_찾기')}
        </Link>
        <Link to="/member/find_pw">
          <FaKey />
          {t('비밀번호_찾기')}
        </Link>
        <Link to="/member/Signup">
          <FaUserPlus />
          {t('회원가입')}
        </Link>
      </LinkBox>
    </>
  );
};

export default React.memo(LoginForm);
