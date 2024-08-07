import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import JoinContainer from '../containers/JoinContainer';
import { OuterBox } from '../../commons/components/LayoutBox';
import { MainTitle } from '../../commons/components/TitleBox';

const Signup = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('회원가입')}</title>
      </Helmet>
      <OuterBox>
        <MainTitle>{t('회원가입')}</MainTitle>
        <JoinContainer />
      </OuterBox>
    </>
  ); /*제목도 공통 스타일로 분리해서 만들 예정*/
};

export default React.memo(Signup);
