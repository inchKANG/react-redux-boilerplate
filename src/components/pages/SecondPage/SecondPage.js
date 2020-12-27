import React from 'react';
import { Link } from 'react-router-dom';
import { TestActions } from '../../../redux/actionCreators';

function SecondPage() {
  return (
    <div>
      SecondPage
      <div>
        3초 뒤 메인페이지 이동 및 store의 state 변경 테스트
        <button onClick={TestActions.testAction}>redux test</button>
      </div>
    </div>
  );
}

export default SecondPage;
