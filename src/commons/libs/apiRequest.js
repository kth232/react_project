export default function apiRequest(url, method='GET', data, headers) {
    //get 방식일 땐 주소형태로 입력, data=요청 데이터

    //url - http://로 시작하는 경우=외부 자원, 아니면 내부 자원

    //대문자가 있을 경우 소문자로 변환
    if (/^http[s]?:/i.test(url)) { //Api 서버로 요청 보내는 주소인 경우
        url=process.env.REACT_APP_API_URL + url;
        //account -> http://localhost:3000/api/v1/account
    }

    const options = {
        mode: 'no-cors',
        method,
    };

    //BODY가 있는 요청인 경우->요청 헤더를 넣어줘야 함
    if (['POST', 'PUT', 'PATCH'].includes(method.toUpperCase()) && data) {
        //헤더가 있으면 기존 것 사용, 없으면 넣어줌
        headers = headers ?? {};
        headers['Content-Type'] = 'application/json;';
        options.headers = headers;
        options.body = JSON.stringify(data); //요청 데이터, 바디데이터는 문자열만 가능함
    }


    return new Promise((resolve, reject) => {
        fetch(url, options) //fetch api 사용, 설치 없어도 표준 언어 사용 가능
        .then((res)=>res.json()) //성공 시 res에서 json 추출
        .then((json)=>resolve(json))
        .catch((err)=>reject(err))
    });
}