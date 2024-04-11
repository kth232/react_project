# setting

- .pretiierrc setting

```json
{
  "singleQuote": true,
  "useTabs": false,
  "tabwidth": 2,
  "semi": true,
  "trailingComma": "all"
} // 역따옴표 3개에 원하는 마크업 언어 입력하면 하이라이팅 가능
```

- 의존성: 필요 라이브러리
  - react-router-dom: 라우터, 페이지를 나눠서 사용
  - sass, styled-components classNames: 스타일링 목적
  - immer: 불변성 관리
  - react-icons: 리액트에서 제공하는 아이콘 라이브러리
  - @loadable/component: 지연 로딩

  ```js
  yarn add react-router-dom sass styled-components classnames immer react-icons @loadable/component
  ```
