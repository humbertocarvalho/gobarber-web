import { all } from 'redux-saga/effects';

import auth from './auth/sagas';

export default function* rootSaga() {
  console.tron.log('chegou');
  return yield all([auth]);
}
