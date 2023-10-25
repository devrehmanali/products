import { persistCombineReducers } from "redux-persist";
import storage from "redux-persist/lib/storage";

import expireIn from "redux-persist-transform-expire-in";
import products from "./ducks/ProductDuck";

const expirationDelay = 1 * 60 * 60 * 1000; // expire in 60 minutes
const expirationKey = "expirationKey";
const appVersion = process.env?.REACT_APP_VERSION ?? "0.0.0";
const persistConfig = {
  key: `rootstore_${appVersion}`,
  storage,
  transforms: [expireIn(expirationDelay, expirationKey, [])],
};

const reducers = {
  products,
};

export default persistCombineReducers(persistConfig, reducers);
