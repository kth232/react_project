import apiRequest from "../../commons/libs/apiRequest";

//기능 추가됨
export const apiJoin = (form) => new Promise((resolve, reject)=>{
    //promise 형태로 가공
    apiRequest('/account', 'POST', form)
    .then((res) => {
        if (!res.status != 201) {
            //검증 실패 시 reject로 promise 객체 반환
            reject(res.data);
            return;
        }
        resolve(res.data) //성공 시
    })
    .catch((err) => {reject(err);
    });
});