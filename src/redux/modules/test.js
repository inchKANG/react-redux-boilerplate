import { createReducer, createAction } from '@reduxjs/toolkit';

const TEST = 'main/TEST';

const test = createAction(TEST);

const testAction = (props) => (dispatch, getstate, { history }) => {
  setTimeout(() => {
    history.push('/');
    dispatch(test());
    alert('text success');
  }, 3000);
};

//유저가 사용할 액션을 export 시킨다.
export const actionCreaters = {
  testAction,
};

export default createReducer(
  { test: false },
  {
    [TEST]: (state, action) => {
      return {
        ...state,
        test: true,
      };
    },
  },
);
