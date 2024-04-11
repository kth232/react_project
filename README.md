# setting

- .pretiierrc setting

```js
{
  "singleQuote": true,
  "useTabs": false,
  "tabwidth": 2,
  "semi": true,
  "trailingComma": "all"
} // 역따옴표 3개에 원하는 마크업 언어 입력하면 문법 하이라이팅 가능
```

## 의존성

> 필요 라이브러리

- '>'는 부가 설명, 주석과 같음, 띄어쓰기 필수

- react-router-dom: 라우터, 페이지를 나눠서 사용
- sass, styled-components classNames: 스타일링 목적
- immer: 불변성 관리
- react-icons: 리액트에서 제공하는 아이콘 라이브러리
- @loadable/component: 지연 로딩
- react-helmet-async: head 태그 내의 특정태그 내용 변경 시 사용(title 이름 등)

  ```js
  yarn add react-router-dom sass styled-components classnames immer react-icons @loadable/component react-helmet-async
  ```

## react-helmet-async 설정

- src/index.js

```jsx
import { HelmetProvider } from 'react-helmet-async';

... //온점 3개: 코드 생략

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
);
```

- 사용법: src/App.js

```js
import { Helmet } from 'react-helmet-async';

const App = () => {
  return (
    <>
      <Helmet>
        <title>site title test</title>
      </Helmet>
    </>
  ); // 바꾸고자 하는 태그 정의, 주로 title태그 사용
};

export default App;
```

## 메세지, 다국어 처리

- 의존성: i18next, react-i18next
- 의존성 설치

```js
yarn add i18next react-i18next
```

- 언어파일 생성: 언어별로 파일 생성해서 불러오기
  - src/langs/ko, src/langs/en 폴더 생성
  - 각 폴더별로 공통 문구: commons.js, 검증 문구: validations.js, 에러 문구: errors.js
  - 언어파일 통합: ex) src/langs/ko/index.js

```javascript
import commons from './commons';
import validations from './validations';
import errors from './errors';

const ko = { ...commons, ...validations, ...errors };

export default ko;
```

- 설정 파일 구성: src/i18n.js

```js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ko from './langs/ko'; // ko/index.js를 불러오는 것과 같음(index.js는 생략 가능)
import en from './langs/en';

const resources = {
  en: {
    translation: en, // 우리가 생성한 영어 언어파일 객체
  },
  ko: {
    translation: ko,
  },
};

i18n.use(initReactI18next).init({
  resources /* 언어 통합시킬 모듈, js에서 객체명과 변수명이 같으면 생략 가능*/,
  lng: navigator.language,
}); // 브라우저 언어에 맞춰서 자동으로 언어 변경
//언어 표준 코드 넣어서 설정해도 가능
```

- 설정 반영: src/index.js

```javascript
...
import './i18n';
...
```

- 적용하기: use.translation hook/ react-i18next
  - t: 메세지 조회 함수, 문구 설정
  - i18n: 편의 기능 객체, changeLanguage(...): 언어 변경 기능

```jsx
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next'; //다른 라이브러리와 헷갈리지 않게 주의!

const App = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Helmet>
        <title>site title test</title>
      </Helmet>
      {/**바꾸고자 하는 태그 정의, 주로 title태그 사용 */}
      <div>{t('아이디')}</div>
      <div>{t('약관에_동의')}</div>
      <div>{t('없는_문구')}</div>
      <button type="button" onClick={() => i18n.changeLanguage('ko')}>
        한국어
      </button>
      <button type="button" onClick={() => i18n.changeLanguage('en')}>
        English
      </button>
    </>
  ); /* i18n에 설정한 언어로 표현, 문구 없을 때는 입력한 그대로 출력, 일단 써놓고 차후 문구 설정해도 됨*/
};

export default App;
```

## 레이아웃 구성

- src/layouts/MainLayout.js
- src/outlines/Header.js
- src/outlines/Footer.js

## 라우팅 구성

### 설정

- src/index.js: BrowserRouter 컴포넌트로 감싸기

```jsx
...

import { BrowserRouter } from 'react-router-dom';

...

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
);
```

### 메인 페이지

- /

### 회원

- /member/join: 회원가입
- /member/login: 로그인

## 없는 페이지

- \* : 없는 페이지: commons/pages/NotFound.js

## 에러 페이지

> class형 컴포넌트: componentDidCatch 사용

- commons/pages/Error.js
- commons/components/ErrorDisplay.js

## 스타일링
### 공통 스타일: src/index.css
- 공통 폰트
- 스타일 초기화
- 기준 폰트 사이즈: styles/fontSize.js ->small, normal, medium, big, extrabig
- 기준 컬러: Primary, Secondary, success, Danger, warning, light, dark