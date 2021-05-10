import React from 'react';

function Hello({color, name, isSpecial}) {
    return <div style={{color: color}}>
        {isSpecial ? <b>*</b>: null}
        반갑습니다. {name} 공부 중 입니다.</div>
}

Hello.defaultProps = {
    name: '이름 없음'
}
export default Hello;