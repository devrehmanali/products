import { put, call, takeLatest } from "redux-saga/effects";
import {
  addAProductAPI,
  getProductsListAPI,
  updateAProductAPI,
} from "../../../apis/ProductAPIS";
import * as actions from "../../reducers/ducks/ProductDuck";
import { all } from "axios";

export function* getProductsSaga({ payload }) {
  try {
    yield put(actions.updateProductsLoading(true));
    yield put(actions.updateGetProductsResponse({ response: null }));
    const response = yield call(getProductsListAPI, payload);
    yield put(
      actions.updateGetProductsResponse({
        response: response?.data || null,
      })
    );
    yield put(actions.updateProductsLoading(false));
  } catch (error) {
    yield put(actions.updateProductsLoading(false));
  } finally {
    yield put(actions.updateProductsLoading(false));
  }
}

export function* AddAProductSaga({ payload }) {
  try {
    yield put(actions.updateProductsLoading(true));
    yield call(addAProductAPI, payload);
    yield all([call(getProductsSaga)]);
  } catch (error) {
    yield put(actions.updateProductsLoading(false));
  } finally {
    yield put(actions.updateProductsLoading(false));
  }
}

export function* UpdateAProductsSaga({ payload }) {
  try {
    yield put(actions.updateProductsLoading(true));
    yield call(updateAProductAPI, payload);
    yield all([call(getProductsSaga)]);
  } catch (error) {
    yield put(actions.updateProductsLoading(false));
  } finally {
    yield put(actions.updateProductsLoading(false));
  }
}

export function* watchProductSagas() {
  yield takeLatest(actions.getProductsRequest.type, getProductsSaga);
  yield takeLatest(actions.addAProductRequest.type, AddAProductSaga);
  yield takeLatest(actions.updateAProductsRequest.type, UpdateAProductsSaga);
}
