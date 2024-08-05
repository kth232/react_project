import apiRequest from "../../commons/libs/apiRequest";

//기능 추가됨
export const apiJoin = (form) => new Promise((resolve, reject)=>{
    //promise 형태로 가공
    apiRequest('/account', 'POST', form)
    .then((data) => console.log(data))
    .catch((err) => reject(err));
});