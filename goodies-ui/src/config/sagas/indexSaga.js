import { takeLatest } from 'redux-saga/effects'

function * test ({type, payload}) {
  console.log(type)
  console.log(payload)
}

export default function * mySaga () {
  yield takeLatest('TEST', test)
}
