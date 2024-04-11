import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ko from './langs/ko'; // ko/index.js를 불러오는 것과 같음(index.js는 생략 가능)
import en from './langs/en'

const resources = {
    en: {
        translation: en, // 우리가 생성한 영어 언어파일 객체
    },
    ko: {
        translation: ko,
    },
};

i18n.use(initReactI18next).init({
    resources, /* 언어 통합시킬 모듈, js에서 객체명과 변수명이 같으면 생략 가능*/
    lng: navigator.language,
}); // 브라우저 언어에 맞춰서 자동으로 언어 변경
//언어 표준 코드 넣어서 설정해도 가능