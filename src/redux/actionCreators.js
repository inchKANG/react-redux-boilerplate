import { bindActionCreators } from 'redux';
import store from './store';
import { actionCreaters as testActions } from './modules/test';

//스토어 객체에서 dispatch를 가져온다.
const { dispatch } = store;

export const TestActions = bindActionCreators(testActions, dispatch);
