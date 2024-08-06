import axios from 'axios'; //axios 모듈 가져오기

export default function apiRequest(url, method = 'GET', data, headers) {
  //get 방식일 땐 주소형태로 입력, data=요청 데이터

  //url - http://로 시작하는 경우=외부 자원, 아니면 내부 자원
  //http://jsonplaceholder..

  //대문자가 있을 경우 소문자로 변환
  if (/^http[s]?:/i.test(url)) {
    //
    //Api 서버로 요청 보내는 주소인 경우
    url = process.env.REACT_APP_API_URL + url;
    //외부 자원이 아닌 경우 account -> http://localhost:4000/api/v1/account
  }
  /**
   * axios 응답 코드가 2xx~3xx만 정상 응답으로 판단
   * 그 외의 응답 코드는 에외 발생 -> 4xx 역시 오류로 판단-> 정상 응답 범위를 변경
   */

  const options = {
    //mode: 'no-cors',
    method,
    url,
    validateStatus: status => status < 500, //500 미만의 응답코드는 정상 응답
  };

  //BODY가 있는 요청인 경우->요청 헤더를 넣어줘야 함
  if (['POST', 'PUT', 'PATCH'].includes(method.toUpperCase()) && data) {

    options.data = data;
    /*
    headers = headers ?? {};
    headers['Content-Type'] = 'application/json;';
    options.headers = headers;
    options.body = JSON.stringify(data); //요청 데이터, 바디데이터는 문자열만 가능함
    */
  }

  if (headers) options.headers = headers; //헤더가 있으면 기존 것 사용, 없으면 넣어줌

  return axios(options);
  /*
  return new Promise((resolve, reject) => {
    fetch(url, options) //fetch api 사용, 설치 없어도 표준 언어 사용 가능
      .then((res) => res.json()) //성공 시 res에서 json 추출
      .then((json) => resolve(json))
      .catch((err) => reject(err));
  });
  */
}
