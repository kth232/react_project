import React from "react";
import MemrberOnlyContainer from "../../member/containers/MemrberOnlyContainer";
const MypageMain =()=>{
    return (
        <MemrberOnlyContainer>
            <h1>마이페이지</h1>
        </MemrberOnlyContainer>
    )
};

export default React.memo(MypageMain);