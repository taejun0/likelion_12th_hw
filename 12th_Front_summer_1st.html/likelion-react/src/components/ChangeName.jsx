// ChangeName.jsx

import React, { useState } from "react";

function ChangeName() {
  const [name, change_name] = useState("머쨍이사자");
  // name : 현재 상태 값, change_name : 상태 업데이트, useState(0) : 카운트 초기 값 0으로 설정
  return (
    <div>
      <p>안녕하세요, {name} 입니다.</p>
      <button onClick={() =>
        change_name(name === "머쨍이사자" ? "안머쨍이사자" : "머쨍이사자")}>이름 변경
      </button>
    </div>
  );
}
export default ChangeName;