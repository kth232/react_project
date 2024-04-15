import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import SignupForm from '../components/SignupForm';
import { OuterBox } from '../../commons/components/LayoutBox';

const Signup = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('회원가입')}</title>
      </Helmet>
      <OuterBox>
        <h1>{t('회원가입')}</h1>
        <SignupForm />
      </OuterBox>
    </>
  ); /*제목도 공통 스타일로 분리해서 만들 예정*/
};

export default React.memo(Signup);
