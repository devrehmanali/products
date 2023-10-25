import { all } from "redux-saga/effects";
import { watchProductSagas } from "./sagas/ProductSaga";

export default function* rootSaga() {
  yield all([watchProductSagas()]);
}
